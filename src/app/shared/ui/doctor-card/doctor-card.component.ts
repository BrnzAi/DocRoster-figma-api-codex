import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Clinic } from '../../data-access/models/clinic.model';
import { Doctor } from '../../data-access/models/doctor.model';

@Component({
    selector: 'dr-doctor-card',
    standalone: true,
    imports: [NgFor, NgIf, RouterLink, DecimalPipe],
    templateUrl: './doctor-card.component.html',
    styleUrls: ['./doctor-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorCardComponent {
  @Input({ required: true }) doctor!: Doctor;
  @Input() clinic?: Clinic;
  @Input() nextAvailable?: string;
  @Input() highlightDistance?: number;
  @Input() showActions = true;

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }
}
