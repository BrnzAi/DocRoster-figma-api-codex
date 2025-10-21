import { DatePipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Assessment } from '../../data-access/models/assessment.model';

@Component({
  selector: 'dr-assessment-card',
  standalone: true,
  imports: [NgIf, NgFor, DatePipe],
  templateUrl: './assessment-card.component.html',
  styleUrls: ['./assessment-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssessmentCardComponent {
  @Input({ required: true }) assessment!: Assessment;
}
