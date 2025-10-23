import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { GoogleMap, MapAdvancedMarker, MapMarker } from '@angular/google-maps';

import { MapStateService } from '../../data-access/map-state.service';
import { GoogleMapsLoaderService } from '../../data-access/google-maps-loader.service';
import { SearchResult } from '../../data-access/models/search-result.model';
import { environment } from '../../../../environments/environment';

interface MarkerView {
  doctorId: string;
  title: string;
  avatar: string;
  position: google.maps.LatLngLiteral;
}

@Component({
    selector: 'dr-map-shell',
    standalone: true,
    imports: [GoogleMap, MapAdvancedMarker, MapMarker, NgIf, NgFor],
    templateUrl: './map-shell.component.html',
    styleUrls: ['./map-shell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapShellComponent {
  protected readonly mapState = inject(MapStateService);
  private readonly mapsLoader = inject(GoogleMapsLoaderService);
  private readonly router = inject(Router);

  @ViewChild(GoogleMap) private readonly map?: GoogleMap;

  readonly markers = signal<MarkerView[]>([]);
  readonly mapCenter = signal<google.maps.LatLngLiteral>({ lat: 43.6532, lng: -79.3832 });
  readonly apiReady = signal(false);
  readonly loadError = signal<string | null>(null);
  readonly mapOptions: google.maps.MapOptions = {
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    clickableIcons: false,
    mapId: environment.googleMapsMapId?.trim() || undefined,
    styles: environment.googleMapsMapStyles?.length ? environment.googleMapsMapStyles : undefined
  };

  constructor() {
    effect(() => {
      this.updateMarkers(this.mapState.results());
    });

    effect(() => {
      if (!this.apiReady()) {
        return;
      }

      this.panToActiveMarker(this.mapState.activeDoctorId());
    });

    void this.mapsLoader
      .load()
      .then(() => {
        if (typeof google === 'undefined' || !google.maps) {
          this.loadError.set('Unable to initialise Google Maps API. Check your API key restrictions.');
          return;
        }

        this.apiReady.set(true);
        this.panToActiveMarker(this.mapState.activeDoctorId());
      })
      .catch((error) => {
        console.error('Failed to load Google Maps script', error);
        this.loadError.set('Map unavailable. Please try again later.');
      });
  }

  onMarkerClick(doctorId: string): void {
    this.mapState.setActiveDoctor(doctorId);
    this.router.navigate(['/specialists', doctorId]);
  }

  private updateMarkers(results: SearchResult[]): void {
    const markers = results
      .map((result) => {
        const coordinates = result.clinic.coordinates;
        if (!coordinates) {
          return null;
        }

        return {
          doctorId: result.doctor.id,
          title: result.doctor.name,
          avatar: result.doctor.avatarUrl,
          position: {
            lat: coordinates.latitude,
            lng: coordinates.longitude
          }
        } satisfies MarkerView;
      })
      .filter((marker): marker is MarkerView => marker !== null);

    this.markers.set(markers);

    if (markers.length) {
      this.mapCenter.set(markers[0].position);
      this.fitToMarkers();
    }
  }

  private fitToMarkers(): void {
    const googleMap = this.map?.googleMap;
    const markers = this.markers();

    if (!googleMap || !markers.length || typeof google === 'undefined' || !google.maps) {
      return;
    }

    const bounds = new google.maps.LatLngBounds();
    markers.forEach((marker) => bounds.extend(marker.position));

    if (!bounds.isEmpty()) {
      googleMap.fitBounds(bounds, { top: 48, right: 48, bottom: 48, left: 48 });
    }
  }

  private panToActiveMarker(activeDoctorId: string | null): void {
    if (!activeDoctorId) {
      return;
    }

    const googleMap = this.map?.googleMap;
    const markers = this.markers();

    if (!googleMap || !markers.length || typeof google === 'undefined' || !google.maps) {
      return;
    }

    const target = markers.find((marker) => marker.doctorId === activeDoctorId);
    if (!target) {
      return;
    }

    googleMap.panTo(target.position);
    if (googleMap.getZoom() && googleMap.getZoom()! < 6) {
      googleMap.setZoom(11);
    }
  }

  get useAdvancedMarkers(): boolean {
    return Boolean(this.mapOptions.mapId);
  }

  trackByDoctor(_index: number, marker: MarkerView): string {
    return marker.doctorId;
  }

  getFallbackMarkerOptions(marker: MarkerView): google.maps.MarkerOptions {
    const maps = (window as typeof window & { google?: typeof google }).google?.maps;
    const isActive = marker.doctorId === this.mapState.activeDoctorId();
    const size = 84;
    const circleRadius = 30;
    const highlightColor = isActive ? '#FF3D96' : '#0A1748';
    const tailColor = isActive ? '#FF3D96' : '#0A1748';
    const clipId = `avatarClip-${marker.doctorId}`;

    const svg = `<?xml version="1.0" encoding="UTF-8"?>
      <svg width="${size}" height="110" viewBox="0 0 ${size} 110" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="${clipId}">
            <circle cx="${size / 2}" cy="${circleRadius + 8}" r="${circleRadius}" />
          </clipPath>
        </defs>
        <path d="M${size / 2},105 L${size / 2 - 12},70 L${size / 2 + 12},70 Z" fill="${tailColor}" opacity="0.95" />
        <circle cx="${size / 2}" cy="${circleRadius + 8}" r="${circleRadius}" fill="${highlightColor}" opacity="0.95" />
        <image href="${marker.avatar}" x="${size / 2 - circleRadius}" y="8" width="${circleRadius * 2}" height="${circleRadius * 2}" clip-path="url(#${clipId})" preserveAspectRatio="xMidYMid slice" />
        <circle cx="${size / 2}" cy="${circleRadius + 8}" r="${circleRadius}" fill="transparent" stroke="#FFFFFF" stroke-width="4" />
      </svg>`;

    if (!maps) {
      return {
        title: marker.title,
        icon: {
          url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
        }
      };
    }

    return {
      icon: {
        url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
        scaledSize: new maps.Size(size, 110),
        anchor: new maps.Point(size / 2, 100)
      }
    };
  }
}
