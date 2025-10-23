import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { DoctorCardComponent } from '../../../shared/ui/doctor-card/doctor-card.component';
import { ReviewCardComponent } from '../../../shared/ui/review-card/review-card.component';
import { SectionHeaderComponent } from '../../../shared/ui/section-header/section-header.component';
import { ReviewFacade } from '../data-access/review.facade';

@Component({
    selector: 'dr-review-page',
    standalone: true,
    imports: [AsyncPipe, NgIf, DatePipe, SectionHeaderComponent, ReviewCardComponent, DoctorCardComponent],
    templateUrl: './review-page.component.html',
    styleUrls: ['./review-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly facade = inject(ReviewFacade);

  readonly context$ = this.route.paramMap.pipe(
    map((params) => params.get('id') ?? ''),
    switchMap((id) => this.facade.getReviewContext(id))
  );
}
