import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MockHttpClientService {
  private readonly defaultLatency = 280;

  get<T>(payload: T, latency = this.defaultLatency): Observable<T> {
    return of(structuredClone(payload)).pipe(delay(latency));
  }

  post<T, B = unknown>(payload: T, _body: B, latency = this.defaultLatency): Observable<T> {
    return of(structuredClone(payload)).pipe(delay(latency));
  }

  mutate<T>(updater: () => T, latency = this.defaultLatency): Observable<T> {
    return of(updater()).pipe(delay(latency));
  }
}

function structuredClone<T>(value: T): T {
  if (value === undefined || value === null) {
    return value;
  }

  if (typeof globalThis.structuredClone === 'function') {
    return globalThis.structuredClone(value) as T;
  }

  return JSON.parse(JSON.stringify(value));
}
