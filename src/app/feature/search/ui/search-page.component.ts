import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { SearchFacade } from '../data-access/search.facade';
import { SearchResult } from '../../../shared/data-access/models/search-result.model';

type SortingOption = 'fee' | 'distance' | 'availability';
type FeeOption = 'low' | 'medium' | 'high' | null;
type GenderOption = 'any' | 'male' | 'female';
type LocationOption = 'belleville' | 'sault-ste-marie' | 'thunder-bay' | null;
type CareOption = 'hybrid' | 'inperson' | 'virtual' | null;

interface FilterState {
  sorting: SortingOption;
  fee: FeeOption;
  gender: GenderOption;
  location: LocationOption;
  care: CareOption;
}

const FEE_ORDER: Record<Exclude<FeeOption, null>, number> = {
  low: 0,
  medium: 1,
  high: 2
};

const LOCATION_LOOKUP: Record<Exclude<LocationOption, null>, string> = {
  belleville: 'Belleville',
  'sault-ste-marie': 'Sault Ste. Marie',
  'thunder-bay': 'Thunder Bay'
};

const SORTING_OPTIONS: ReadonlyArray<{ id: SortingOption; label: string }> = [
  { id: 'fee', label: 'Fee' },
  { id: 'distance', label: 'Distance' },
  { id: 'availability', label: 'Availability' }
];

const FEE_OPTIONS: ReadonlyArray<{ id: Exclude<FeeOption, null>; label: string }> = [
  { id: 'low', label: 'Low' },
  { id: 'medium', label: 'Medium' },
  { id: 'high', label: 'High' }
];

const GENDER_OPTIONS: ReadonlyArray<{ id: GenderOption; label: string }> = [
  { id: 'any', label: 'Any' },
  { id: 'male', label: 'Male' },
  { id: 'female', label: 'Female' }
];

const LOCATION_OPTIONS: ReadonlyArray<{ id: Exclude<LocationOption, null>; label: string }> = [
  { id: 'belleville', label: 'Belleville' },
  { id: 'sault-ste-marie', label: 'Sault Ste. Marie' },
  { id: 'thunder-bay', label: 'Thunder Bay' }
];

const CARE_OPTIONS: ReadonlyArray<{ id: Exclude<CareOption, null>; label: string }> = [
  { id: 'hybrid', label: 'Hybrid' },
  { id: 'inperson', label: 'In-person' },
  { id: 'virtual', label: 'Virtual' }
];

const createDefaultFilters = (): FilterState => ({
  sorting: 'availability',
  fee: null,
  gender: 'any',
  location: null,
  care: null
});

const cloneFilters = (filters: FilterState): FilterState => ({ ...filters });

const filtersEqual = (a: FilterState, b: FilterState): boolean =>
  a.sorting === b.sorting &&
  a.fee === b.fee &&
  a.gender === b.gender &&
  a.location === b.location &&
  a.care === b.care;

const parseTimeToMinutes = (value: string): number => {
  const [hours, minutes] = value.split(':').map((part) => Number.parseInt(part, 10));
  if (Number.isFinite(hours) && Number.isFinite(minutes)) {
    return hours * 60 + minutes;
  }
  return Number.MAX_SAFE_INTEGER;
};

const resolveFeeRank = (tier: FeeOption): number => {
  if (!tier) {
    return Number.MAX_SAFE_INTEGER;
  }
  return FEE_ORDER[tier];
};

@Component({
  selector: 'dr-search-page',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, ReactiveFormsModule, RouterLink],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent {
  private readonly searchFacade = inject(SearchFacade);

  readonly searchControl = new FormControl('', { nonNullable: true });
  private readonly searchTerm$ = this.searchControl.valueChanges.pipe(startWith(''));

  private readonly results$ = this.searchFacade.results$;
  readonly defaultPrompt = 'Find me an Occupational Therapist who travels to Thunder Bay for catastrophic assessments';

  private readonly appliedFilters = signal<FilterState>(createDefaultFilters());
  private readonly workingFilters = signal<FilterState>(createDefaultFilters());
  readonly showFilters = signal(false);
  readonly hasActiveFilters = computed(() => !filtersEqual(this.appliedFilters(), createDefaultFilters()));

  private readonly appliedFilters$ = toObservable(this.appliedFilters);

  readonly visibleResults$ = combineLatest<[SearchResult[], string, FilterState]>([
    this.results$,
    this.searchTerm$,
    this.appliedFilters$
  ]).pipe(
    map(([results, term, filters]) => {
      const query = (term ?? '').trim().toLowerCase();
      const normalizedLocation = filters.location ? LOCATION_LOOKUP[filters.location].toLowerCase() : null;

      let filtered = results;

      if (filters.fee) {
        filtered = filtered.filter((result) => result.doctor.feeTier === filters.fee);
      }

      if (filters.gender !== 'any') {
        filtered = filtered.filter((result) => result.doctor.gender === filters.gender);
      }

      if (normalizedLocation) {
        filtered = filtered.filter(
          (result) => result.clinic.address.city.toLowerCase() === normalizedLocation
        );
      }

      if (filters.care) {
        filtered = filtered.filter((result) => result.doctor.careType === filters.care);
      }

      if (query) {
        filtered = filtered.filter((result) => {
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
      }

      const sorted = [...filtered];
      switch (filters.sorting) {
        case 'fee': {
          sorted.sort(
            (a, b) => resolveFeeRank(a.doctor.feeTier ?? null) - resolveFeeRank(b.doctor.feeTier ?? null)
          );
          break;
        }
        case 'distance': {
          sorted.sort((a, b) => a.distanceInMinutes - b.distanceInMinutes);
          break;
        }
        case 'availability':
        default: {
          sorted.sort(
            (a, b) => parseTimeToMinutes(a.nextAvailable) - parseTimeToMinutes(b.nextAvailable)
          );
        }
      }

      return sorted;
    })
  );

  readonly sortingOptions = SORTING_OPTIONS;
  readonly feeOptions = FEE_OPTIONS;
  readonly genderOptions = GENDER_OPTIONS;
  readonly locationOptions = LOCATION_OPTIONS;
  readonly careOptions = CARE_OPTIONS;

  openFilters(): void {
    this.workingFilters.set(cloneFilters(this.appliedFilters()));
    this.showFilters.set(true);
  }

  closeFilters(): void {
    this.showFilters.set(false);
    this.workingFilters.set(cloneFilters(this.appliedFilters()));
  }

  applyFilters(): void {
    this.appliedFilters.set(cloneFilters(this.workingFilters()));
    this.showFilters.set(false);
  }

  resetFilters(): void {
    this.workingFilters.set(createDefaultFilters());
  }

  selectSorting(option: SortingOption): void {
    this.workingFilters.update((state) => ({ ...state, sorting: option }));
  }

  toggleFee(option: Exclude<FeeOption, null>): void {
    this.workingFilters.update((state) => ({
      ...state,
      fee: state.fee === option ? null : option
    }));
  }

  selectGender(option: GenderOption): void {
    this.workingFilters.update((state) => ({ ...state, gender: option }));
  }

  toggleLocation(option: Exclude<LocationOption, null>): void {
    this.workingFilters.update((state) => ({
      ...state,
      location: state.location === option ? null : option
    }));
  }

  toggleCare(option: Exclude<CareOption, null>): void {
    this.workingFilters.update((state) => ({
      ...state,
      care: state.care === option ? null : option
    }));
  }

  isSortingActive(option: SortingOption): boolean {
    return this.workingFilters().sorting === option;
  }

  isFeeActive(option: Exclude<FeeOption, null>): boolean {
    return this.workingFilters().fee === option;
  }

  isGenderActive(option: GenderOption): boolean {
    return this.workingFilters().gender === option;
  }

  isLocationActive(option: Exclude<LocationOption, null>): boolean {
    return this.workingFilters().location === option;
  }

  isCareActive(option: Exclude<CareOption, null>): boolean {
    return this.workingFilters().care === option;
  }
}
