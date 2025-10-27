import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';

import { SpecialistFacade } from '../data-access/specialist.facade';
import { MapStateService } from '../../../shared/data-access/map-state.service';
import { Clinic } from '../../../shared/data-access/models/clinic.model';
import { Doctor } from '../../../shared/data-access/models/doctor.model';
import { Review } from '../../../shared/data-access/models/review.model';

interface SpecialistSpecialization {
  title: string;
  subtitle: string;
  icon: string;
  tone: 'primary' | 'tint' | 'default';
}

interface SpecialistContact {
  text: string;
  icon: string;
  href?: string;
  external?: boolean;
}

interface SpecialistSchedule {
  lines: string[];
  location?: string;
  appointmentHref?: string;
}

interface SpecialistViewModel {
  doctor?: Doctor;
  clinic?: Clinic;
  reviews: Review[];
  heroImage: string;
  specializations: SpecialistSpecialization[];
  contacts: SpecialistContact[];
  schedule: SpecialistSchedule | null;
}

@Component({
    selector: 'dr-specialist-page',
    standalone: true,
    imports: [
        AsyncPipe,
        NgIf,
        NgFor,
        RouterLink
    ],
    templateUrl: './specialist-page.component.html',
    styleUrls: ['./specialist-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpecialistPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly facade = inject(SpecialistFacade);
  private readonly mapState = inject(MapStateService);

  readonly context$ = this.route.paramMap.pipe(
    map((params) => params.get('id') ?? ''),
    switchMap((id) => this.facade.getDoctorProfileContext(id)),
    tap((context) => {
      if (context.doctor) {
        this.mapState.setActiveDoctor(context.doctor.id);
      }
    }),
    map((context): SpecialistViewModel => ({
      ...context,
      heroImage: this.resolveHeroImage(context.clinic),
      specializations: context.doctor ? this.buildSpecializations(context.doctor) : [],
      contacts: this.buildContacts(context.doctor, context.clinic),
      schedule: context.doctor ? this.buildSchedule(context.doctor, context.clinic) : null
    }))
  );

  formatPhoneHref(phone: string): string {
    return `tel:${phone.replace(/[^\d+]/g, '')}`;
  }

  buildMapsLink(address: { street: string; city: string; state: string }): string {
    const query = `${address.street}, ${address.city}, ${address.state}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }

  private resolveHeroImage(clinic?: Clinic): string {
    return clinic?.heroImage ?? 'assets/specialist/image.svg';
  }

  private buildSpecializations(doctor: Doctor): SpecialistSpecialization[] {
    const cards: SpecialistSpecialization[] = [
      {
        title: doctor.specialty,
        subtitle: 'Field of practice',
        icon: 'assets/specialist/vector-2.svg',
        tone: 'primary'
      }
    ];

    if (doctor.highlights?.length) {
      const [first, second] = doctor.highlights;
      cards.push({
        title: first.value ?? first.label,
        subtitle: first.label,
        icon: 'assets/specialist/vector-3.svg',
        tone: 'tint'
      });

      if (second) {
        cards.push({
          title: second.value ?? second.label,
          subtitle: second.label,
          icon: 'assets/specialist/vector-4.svg',
          tone: 'default'
        });
      }
    } else if (doctor.careType) {
      const careLabel =
        doctor.careType === 'inperson'
          ? 'In-person'
          : doctor.careType === 'virtual'
          ? 'Virtual'
          : 'Hybrid';
      cards.push({
        title: `${careLabel} care`,
        subtitle: 'Delivery mode',
        icon: 'assets/specialist/vector-3.svg',
        tone: 'tint'
      });
    }

    return cards;
  }

  private buildContacts(doctor?: Doctor, clinic?: Clinic): SpecialistContact[] {
    const contacts: SpecialistContact[] = [];

    if (doctor?.languages?.length) {
      contacts.push({
        text: doctor.languages.join(', '),
        icon: 'assets/specialist/vector-7.svg'
      });
    }

    if (clinic?.address) {
      contacts.push({
        text: `${clinic.address.street}, ${clinic.address.city}, ${clinic.address.state}`,
        icon: 'assets/specialist/vector-8.svg',
        href: this.buildMapsLink(clinic.address),
        external: true
      });
    }

    if (clinic?.email) {
      contacts.push({
        text: clinic.email,
        icon: 'assets/specialist/vector-9.svg',
        href: `mailto:${clinic.email}`
      });
    }

    if (clinic?.phone) {
      contacts.push({
        text: clinic.phone,
        icon: 'assets/specialist/vector-10.svg',
        href: this.formatPhoneHref(clinic.phone)
      });
    }

    return contacts;
  }

  private buildSchedule(doctor: Doctor, clinic?: Clinic): SpecialistSchedule | null {
    if (!doctor.availability?.length) {
      return null;
    }

    const lines = doctor.availability.map((slot) => {
      const day = slot.day.toUpperCase();
      const times = slot.times.join(' · ');
      return `${day}, ${times}`;
    });

    const schedule: SpecialistSchedule = {
      lines,
      location: clinic?.name ?? undefined
    };

    if (clinic?.phone) {
      schedule.appointmentHref = this.formatPhoneHref(clinic.phone);
    }

    return schedule;
  }
}
