import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { DoctorCardComponent } from '../../../shared/ui/doctor-card/doctor-card.component';
import { FilterGroupComponent } from '../../../shared/ui/filter-group/filter-group.component';
import { SectionHeaderComponent } from '../../../shared/ui/section-header/section-header.component';
import { TagListComponent } from '../../../shared/ui/tag-list/tag-list.component';
import { FilterGroup } from '../../../shared/data-access/models/filter.model';
import { FiltersFacade } from '../data-access/filters.facade';

@Component({
  selector: 'dr-filters-page',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, JsonPipe, SectionHeaderComponent, FilterGroupComponent, TagListComponent, DoctorCardComponent],
  templateUrl: './filters-page.component.html',
  styleUrls: ['./filters-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersPageComponent {
  private readonly facade = inject(FiltersFacade);

  readonly filters$ = this.facade.filters$;
  readonly selections = this.facade.selectionsSignal;
  readonly filteredResults$ = this.facade.filteredResults$;
  readonly activeFilters = this.facade.activeFilterCount;
  readonly hasActiveFilters = computed(() => this.activeFilters() > 0);

  onToggle(group: FilterGroup, value: string): void {
    this.facade.toggleOption(group, value);
  }

  clearGroup(groupId: string): void {
    this.facade.clearGroup(groupId);
  }

  resetAll(): void {
    this.facade.resetAll();
  }
}
