import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { DoctorCardComponent } from '../../../shared/ui/doctor-card/doctor-card.component';
import { FilterGroupComponent } from '../../../shared/ui/filter-group/filter-group.component';
import { SectionHeaderComponent } from '../../../shared/ui/section-header/section-header.component';
import { FilterGroup } from '../../../shared/data-access/models/filter.model';
import { FiltersFacade } from '../../filters/data-access/filters.facade';
import { SearchFacade } from '../data-access/search.facade';

@Component({
  selector: 'dr-search-page',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, ReactiveFormsModule, SectionHeaderComponent, FilterGroupComponent, DoctorCardComponent],
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
  readonly searchControl = new FormControl('', { nonNullable: true });

  private readonly searchTerm$ = this.searchControl.valueChanges.pipe(startWith(''));

  readonly visibleResults$ = combineLatest([this.filteredResults$, this.searchTerm$]).pipe(
    map(([results, term]) => {
      const query = term.trim().toLowerCase();
      if (!query.length) {
        return results;
      }
      return results.filter((result) => {
        const haystack = [
          result.doctor.name,
          result.doctor.specialty,
          result.clinic.name,
          result.clinic.address.city,
          result.clinic.address.state
        ]
          .join(' ')
          .toLowerCase();
        return haystack.includes(query);
      });
    })
  );

  readonly visibleCount$ = this.visibleResults$.pipe(map((items) => items.length));

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

  clearSearch(): void {
    this.searchControl.setValue('');
  }
}
