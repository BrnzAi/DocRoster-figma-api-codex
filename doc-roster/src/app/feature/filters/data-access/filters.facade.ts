import { Injectable, computed, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { DocRosterApiService } from '../../../data-access/doc-roster-api.service';
import { FilterGroup } from '../../../shared/data-access/models/filter.model';
import { SearchResult } from '../../../shared/data-access/models/search-result.model';

type FilterSelections = Record<string, string[]>;

type FilterPredicate = (result: SearchResult) => boolean;

const FILTER_PREDICATES: Record<string, FilterPredicate> = {
  virtual: (result) => result.doctor.virtualCare,
  multilingual: (result) => result.doctor.languages.length > 1,
  evening: (result) => result.doctor.availability.some((slot) => slot.times.some((time) => parseInt(time.split(':')[0], 10) >= 17)),
  weekend: (result) => result.doctor.availability.some((slot) => ['Saturday', 'Sunday'].includes(slot.day)),
  transit: () => true,
  hybrid: () => true,
  inperson: () => true,
  hmo: (result) => result.doctor.acceptedPlans.includes('hmo'),
  ppo: (result) => result.doctor.acceptedPlans.includes('ppo'),
  direct: (result) => result.doctor.acceptedPlans.includes('direct')
};

@Injectable({ providedIn: 'root' })
export class FiltersFacade {
  private readonly api = inject(DocRosterApiService);
  private readonly selections = signal<FilterSelections>({});

  readonly filters$: Observable<FilterGroup[]> = this.api.getFilters();
  readonly selectionsSignal = computed(() => this.selections());
  private readonly selections$ = toObservable(this.selectionsSignal);

  readonly activeFilterCount = computed(() =>
    Object.values(this.selections()).reduce((total, values) => total + values.length, 0)
  );

  readonly filteredResults$: Observable<SearchResult[]> = combineLatest([
    this.api.getSearchResults(),
    this.selections$,
    this.filters$
  ]).pipe(
    map(([results, selections, groups]) => {
      if (!Object.keys(selections).length) {
        return results;
      }
      return results.filter((result) =>
        Object.entries(selections).every(([groupId, values]) => {
          if (!values.length) {
            return true;
          }
          const group = groups.find((g) => g.id === groupId);
          if (!group) {
            return true;
          }
          return values.every((value) => {
            const predicate = FILTER_PREDICATES[value];
            return predicate ? predicate(result) : true;
          });
        })
      );
    })
  );

  toggleOption(group: FilterGroup, optionValue: string): void {
    const current = { ...this.selections() };
    const currentValues = current[group.id] ?? [];

    if (group.type === 'single') {
      current[group.id] = currentValues[0] === optionValue ? [] : [optionValue];
    } else {
      const nextValues = currentValues.includes(optionValue)
        ? currentValues.filter((value) => value !== optionValue)
        : [...currentValues, optionValue];
      current[group.id] = nextValues;
    }

    this.selections.set(current);
  }

  clearGroup(groupId: string): void {
    if (!this.selections()[groupId]) {
      return;
    }
    const next = { ...this.selections() };
    delete next[groupId];
    this.selections.set(next);
  }

  resetAll(): void {
    this.selections.set({});
  }
}
