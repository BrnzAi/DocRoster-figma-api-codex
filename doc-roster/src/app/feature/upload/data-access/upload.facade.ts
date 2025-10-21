import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { MockHttpClientService } from '../../../shared/data-access/mock-http-client.service';

export interface UploadRequest {
  title: string;
  organization: string;
  category: string;
  summary: string;
  fileName: string;
}

export interface UploadResult {
  id: string;
  nextStep: string;
  eta: string;
}

@Injectable({ providedIn: 'root' })
export class UploadFacade {
  private readonly http = inject(MockHttpClientService);
  private readonly progressSignal = signal(0);
  private readonly uploadingSignal = signal(false);

  readonly progress = computed(() => this.progressSignal());
  readonly isUploading = computed(() => this.uploadingSignal());

  upload(request: UploadRequest): Observable<UploadResult> {
    this.uploadingSignal.set(true);
    this.progressSignal.set(30);

    return this.http
      .mutate(() => {
        this.progressSignal.set(85);
        const result: UploadResult = {
          id: `upload-${crypto.randomUUID()}`,
          nextStep: 'Our clinical review team will audit and structure the submission.',
          eta: '24 business hours'
        };
        return result;
      }, 450)
      .pipe(
        tap(() => this.progressSignal.set(100)),
        finalize(() => this.uploadingSignal.set(false))
      );
  }

  reset(): void {
    this.progressSignal.set(0);
    this.uploadingSignal.set(false);
  }
}
