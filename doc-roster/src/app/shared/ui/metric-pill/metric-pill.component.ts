import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dr-metric-pill',
  standalone: true,
  templateUrl: './metric-pill.component.html',
  styleUrls: ['./metric-pill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricPillComponent {
  @Input({ required: true }) value!: string;
  @Input({ required: true }) label!: string;
  @Input() tone: 'primary' | 'secondary' | 'neutral' = 'primary';
}
