import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { DocRosterApiService } from '../../../data-access/doc-roster-api.service';
import { SearchResult } from '../../../shared/data-access/models/search-result.model';

@Injectable({ providedIn: 'root' })
export class SearchFacade {
  private readonly api = inject(DocRosterApiService);

  readonly results$: Observable<SearchResult[]> = this.api.getSearchResults();
}
