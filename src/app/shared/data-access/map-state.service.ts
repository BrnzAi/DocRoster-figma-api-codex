import { Injectable, signal } from '@angular/core';

import { SearchResult } from './models/search-result.model';

@Injectable({ providedIn: 'root' })
export class MapStateService {
  private readonly resultsSignal = signal<SearchResult[]>([]);
  private readonly activeDoctorIdSignal = signal<string | null>(null);

  readonly results = this.resultsSignal.asReadonly();
  readonly activeDoctorId = this.activeDoctorIdSignal.asReadonly();

  setResults(results: SearchResult[]): void {
    this.resultsSignal.set(results);

    if (!results.length) {
      this.activeDoctorIdSignal.set(null);
      return;
    }

    const current = this.activeDoctorIdSignal();
    if (!current || !results.some((item) => item.doctor.id === current)) {
      this.activeDoctorIdSignal.set(results[0].doctor.id);
    }
  }

  setActiveDoctor(doctorId: string | null): void {
    this.activeDoctorIdSignal.set(doctorId);
  }

  clear(): void {
    this.resultsSignal.set([]);
    this.activeDoctorIdSignal.set(null);
  }
}
