import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { SpecialistFacade } from '../data-access/specialist.facade';

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

  readonly context$ = this.route.paramMap.pipe(
    map((params) => params.get('id') ?? ''),
    switchMap((id) => this.facade.getDoctorProfileContext(id))
  );

  formatPhoneHref(phone: string): string {
    return `tel:${phone.replace(/[^\d+]/g, '')}`;
  }

  buildMapsLink(address: { street: string; city: string; state: string }): string {
    const query = `${address.street}, ${address.city}, ${address.state}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  }
}
