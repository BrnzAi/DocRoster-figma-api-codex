import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { DoctorCardComponent } from '../../../shared/ui/doctor-card/doctor-card.component';
import { FilterGroupComponent } from '../../../shared/ui/filter-group/filter-group.component';
import { SectionHeaderComponent } from '../../../shared/ui/section-header/section-header.component';
import { FilterGroup } from '../../../shared/data-access/models/filter.model';
import { FiltersFacade } from '../../filters/data-access/filters.facade';
import { SearchFacade } from '../data-access/search.facade';

@Component({
  selector: 'dr-search-page',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, SectionHeaderComponent, FilterGroupComponent, DoctorCardComponent],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent {
  private readonly filtersFacade = inject(FiltersFacade);
  private readonly searchFacade = inject(SearchFacade);

  readonly filters$ = this.filtersFacade.filters$;
  readonly selections = this.filtersFacade.selectionsSignal;
  readonly filteredResults$ = this.filtersFacade.filteredResults$;
  readonly activeFilters = this.filtersFacade.activeFilterCount;
  readonly totalResults$ = this.searchFacade.results$;
  readonly hasSelections = computed(() => this.activeFilters() > 0);

  onToggle(group: FilterGroup, value: string): void {
    this.filtersFacade.toggleOption(group, value);
  }

  clearGroup(groupId: string): void {
    this.filtersFacade.clearGroup(groupId);
  }

  resetAll(): void {
    this.filtersFacade.resetAll();
  }

  selectionForGroup(groupId: string): string[] {
    return this.selections()[groupId] ?? [];
  }
}
