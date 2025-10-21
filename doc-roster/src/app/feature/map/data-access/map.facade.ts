import { Injectable, computed, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { DocRosterApiService } from '../../../data-access/doc-roster-api.service';
import { Clinic } from '../../../shared/data-access/models/clinic.model';
import { SearchResult } from '../../../shared/data-access/models/search-result.model';

@Injectable({ providedIn: 'root' })
export class MapFacade {
  private readonly api = inject(DocRosterApiService);

  readonly clinics$: Observable<Clinic[]> = this.api.getClinics();
  readonly searchResults$: Observable<SearchResult[]> = this.api.getSearchResults();
  readonly metrics = computed(() => this.api.metrics());
}
