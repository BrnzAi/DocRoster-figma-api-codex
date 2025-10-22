import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { DocRosterApiService } from '../../../data-access/doc-roster-api.service';
import { MockHttpClientService } from '../../../shared/data-access/mock-http-client.service';
import { AuthSession, LoginRequest, RecoveryRequest, RegisterRequest, VerificationRequest } from '../../../shared/data-access/models/auth.model';
import { UserProfile } from '../../../shared/data-access/models/user-profile.model';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private readonly http = inject(MockHttpClientService);
  private readonly api = inject(DocRosterApiService);

  private readonly sessionSignal = signal<AuthSession | null>(null);
  private readonly errorSignal = signal<string | null>(null);

  readonly session = computed(() => this.sessionSignal());
  readonly lastError = computed(() => this.errorSignal());

  login(request: LoginRequest): Observable<AuthSession> {
    this.errorSignal.set(null);
    return this.http
      .mutate(() => {
        const session: AuthSession = {
          token: crypto.randomUUID(),
          expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString(),
          userId: request.email.toLowerCase()
        };
        this.sessionSignal.set(session);
        return session;
      })
      .pipe(
        catchError((error: Error) => {
          this.errorSignal.set(error.message);
          return throwError(() => error);
        })
      );
  }

  register(request: RegisterRequest): Observable<AuthSession> {
    this.errorSignal.set(null);
    if (!request.agreeToTerms) {
      return throwError(() => new Error('You must agree to the terms to continue.'));
    }
    return this.http.mutate(() => {
      const session: AuthSession = {
        token: crypto.randomUUID(),
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 12).toISOString(),
        userId: crypto.randomUUID()
      };
      this.sessionSignal.set(session);
      return session;
    });
  }

  recover(request: RecoveryRequest): Observable<{ email: string; sentAt: string }> {
    this.errorSignal.set(null);
    return this.http.mutate(() => ({ email: request.email, sentAt: new Date().toISOString() }));
  }

  uploadAvatar(file: File): Observable<string> {
    const reference = `avatar-${crypto.randomUUID()}-${file.name}`;
    return this.http.mutate(() => reference);
  }

  verify(request: VerificationRequest): Observable<boolean> {
    this.errorSignal.set(null);
    return this.http.mutate(() => request.code.trim().length === 6).pipe(
      tap((isValid) => {
        if (!isValid) {
          this.errorSignal.set('The verification code is invalid.');
        }
      })
    );
  }

  loadProfile(): Observable<UserProfile> {
    return this.api.getUserProfile();
  }

  signOut(): void {
    this.sessionSignal.set(null);
  }
}
