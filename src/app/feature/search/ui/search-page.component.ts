import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { SearchFacade } from '../data-access/search.facade';
import { SearchResult } from '../../../shared/data-access/models/search-result.model';

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

  readonly visibleResults$ = combineLatest<[SearchResult[], string]>([
    this.results$,
    this.searchTerm$
  ]).pipe(
    map(([results, term]) => {
      const query = (term ?? '').trim().toLowerCase();
      const enriched = results.map((result, index) => ({
        ...result,
        avatar: SEARCH_AVATARS[index % SEARCH_AVATARS.length]
      }));
      if (!query) {
        return enriched;
      }
      return enriched.filter((result) => {
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
}

const SEARCH_AVATARS = [
  'assets/figma/search/1814_1178.png',
  'assets/figma/search/1814_1186.png',
  'assets/figma/search/1814_1194.png',
  'assets/figma/search/1814_1202.png',
  'assets/figma/search/1814_1210.png',
  'assets/figma/search/1814_1218.png'
];
