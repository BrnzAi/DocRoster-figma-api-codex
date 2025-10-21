import { AsyncPipe, DatePipe, DecimalPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { ClinicCardComponent } from '../../../shared/ui/clinic-card/clinic-card.component';
import { ReviewCardComponent } from '../../../shared/ui/review-card/review-card.component';
import { SectionHeaderComponent } from '../../../shared/ui/section-header/section-header.component';
import { TagListComponent } from '../../../shared/ui/tag-list/tag-list.component';
import { SpecialistFacade } from '../data-access/specialist.facade';

@Component({
  selector: 'dr-specialist-page',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    DatePipe,
    DecimalPipe,
    SectionHeaderComponent,
    ClinicCardComponent,
    ReviewCardComponent,
    TagListComponent
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
}
