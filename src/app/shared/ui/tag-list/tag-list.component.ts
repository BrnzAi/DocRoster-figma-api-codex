import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'dr-tag-list',
    standalone: true,
    imports: [NgFor],
    templateUrl: './tag-list.component.html',
    styleUrls: ['./tag-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagListComponent {
  @Input() tags: string[] = [];
}
