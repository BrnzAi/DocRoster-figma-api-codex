import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { toObservable } from '@angular/core/rxjs-interop';

import { DocRosterApiService } from '../../../data-access/doc-roster-api.service';
import { UserProfile } from '../../../shared/data-access/models/user-profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileFacade {
  private readonly api = inject(DocRosterApiService);
  private readonly savingNotificationPreference = signal(false);
  private readonly profileSignal = signal<UserProfile | null>(null);
  readonly profile$ = toObservable(this.profileSignal);
  readonly isSaving = computed(() => this.savingNotificationPreference());

  constructor() {
    this.api.getUserProfile().subscribe((profile) => this.profileSignal.set(profile));
  }

  updateNotificationPreference(enabled: boolean): Observable<UserProfile> {
    this.savingNotificationPreference.set(true);
    return this.api.updateNotificationPreference(enabled).pipe(
      tap((profile) => this.profileSignal.set(profile)),
      finalize(() => this.savingNotificationPreference.set(false))
    );
  }
}
