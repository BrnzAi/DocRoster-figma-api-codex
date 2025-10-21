import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthFacade } from '../data-access/auth.facade';

@Component({
  selector: 'dr-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgIf, AsyncPipe],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthFacade);
  private readonly router = inject(Router);

  readonly status = signal<'idle' | 'pending' | 'success' | 'error'>('idle');
  readonly errorMessage = computed(() => this.auth.lastError());
  private readonly submitted = signal(false);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false]
  });

  submit(): void {
    if (this.form.invalid || this.status() === 'pending') {
      this.submitted.set(true);
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.set(true);
    this.status.set('pending');
    this.auth.login(this.form.getRawValue()).subscribe({
      next: () => {
        this.status.set('success');
        this.router.navigate(['/profile']);
      },
      error: () => {
        this.status.set('error');
      }
    });
  }

  isEmailInvalid(): boolean {
    const control = this.form.controls.email;
    return control.invalid && (control.dirty || control.touched || this.submitted());
  }

  isPasswordInvalid(): boolean {
    const control = this.form.controls.password;
    return control.invalid && (control.dirty || control.touched || this.submitted());
  }

  showValidationErrors(): boolean {
    return this.submitted() && this.form.invalid;
  }

  openRecovery(): void {
    this.router.navigate(['/auth/recover']);
  }
}
