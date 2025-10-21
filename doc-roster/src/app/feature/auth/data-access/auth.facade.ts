import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, throwError } from 'rxjs/operators';

import { DocRosterApiService } from '../../../data-access/doc-roster-api.service';
import { MOCK_PROFILE } from '../../../shared/data-access/mocks/doc-roster.mocks';
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
    return this.http.mutate(() => {
      const isValidUser = request.email.toLowerCase() === MOCK_PROFILE.email.toLowerCase() && request.password.length >= 6;
      if (!isValidUser) {
        throw new Error('The email or password is incorrect.');
      }
      const session: AuthSession = {
        token: crypto.randomUUID(),
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString(),
        userId: MOCK_PROFILE.id
      };
      this.sessionSignal.set(session);
      return session;
    }).pipe(
      catchError((error: Error) => {
        this.errorSignal.set(error.message);
        return throwError(() => error);
      })
    );
  }

  register(request: RegisterRequest): Observable<AuthSession> {
    this.errorSignal.set(null);
    if (request.password !== request.confirmPassword) {
      return throwError(() => new Error('Passwords do not match.'));
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
