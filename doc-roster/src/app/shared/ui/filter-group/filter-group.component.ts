import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { FilterGroup } from '../../data-access/models/filter.model';

@Component({
  selector: 'dr-filter-group',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterGroupComponent {
  @Input({ required: true }) group!: FilterGroup;
  @Input() selected: string[] = [];
  @Output() toggled = new EventEmitter<string>();

  onToggle(value: string): void {
    this.toggled.emit(value);
  }

  isActive(value: string): boolean {
    return this.selected.includes(value);
  }
}
