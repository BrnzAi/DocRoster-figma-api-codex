import { DatePipe, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Review } from '../../data-access/models/review.model';

@Component({
    selector: 'dr-review-card',
    standalone: true,
    imports: [DatePipe, NgFor],
    templateUrl: './review-card.component.html',
    styleUrls: ['./review-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewCardComponent {
  @Input({ required: true }) review!: Review;
}
