import { AsyncPipe, DatePipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ClinicCardComponent } from '../../../shared/ui/clinic-card/clinic-card.component';
import { DoctorCardComponent } from '../../../shared/ui/doctor-card/doctor-card.component';
import { MetricPillComponent } from '../../../shared/ui/metric-pill/metric-pill.component';
import { SectionHeaderComponent } from '../../../shared/ui/section-header/section-header.component';
import { MapFacade } from '../data-access/map.facade';

@Component({
  selector: 'dr-map-page',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    NgIf,
    DatePipe,
    DecimalPipe,
    RouterLink,
    SectionHeaderComponent,
    MetricPillComponent,
    ClinicCardComponent,
    DoctorCardComponent
  ],
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapPageComponent {
  constructor(public readonly facade: MapFacade) {}
}
