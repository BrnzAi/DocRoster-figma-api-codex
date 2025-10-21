import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Clinic } from '../../data-access/models/clinic.model';

@Component({
  selector: 'dr-clinic-card',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, DecimalPipe],
  templateUrl: './clinic-card.component.html',
  styleUrls: ['./clinic-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClinicCardComponent {
  @Input({ required: true }) clinic!: Clinic;
  @Input() showActions = true;
}
