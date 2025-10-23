import { Injectable } from '@angular/core';

import { importLibrary, setOptions } from '@googlemaps/js-api-loader';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GoogleMapsLoaderService {
  private loadingPromise: Promise<void> | null = null;
  private optionsInitialised = false;

  load(): Promise<void> {
    if (typeof window !== 'undefined' && (window as typeof window & { google?: typeof google }).google?.maps) {
      return Promise.resolve();
    }

    const apiKey = environment.googleMapsApiKey?.trim();

    if (!apiKey) {
      console.warn(
        'Google Maps API key is not configured. Update googleMapsApiKey in your environment files to enable the interactive map.'
      );
      return Promise.reject(new Error('Missing Google Maps API key'));
    }

    if (!this.loadingPromise) {
      if (!this.optionsInitialised) {
        setOptions({
          key: apiKey,
          v: 'weekly'
        });
        this.optionsInitialised = true;
      }

      this.loadingPromise = importLibrary('maps')
        .then(() => importLibrary('marker'))
        .then(() => void 0)
        .catch((error: unknown) => {
          this.loadingPromise = null;
          throw error;
        });
    }

    return this.loadingPromise as Promise<void>;
  }
}
