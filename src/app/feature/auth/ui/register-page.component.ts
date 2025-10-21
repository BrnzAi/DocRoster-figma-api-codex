import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthFacade } from '../data-access/auth.facade';

@Component({
  selector: 'dr-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthFacade);
  private readonly router = inject(Router);

  readonly status = signal<'idle' | 'pending' | 'success' | 'error'>('idle');
  readonly submitted = signal(false);
  readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    agreeToTerms: [false, [Validators.requiredTrue]]
  });
  readonly errorMessage = signal<string | null>(null);
  readonly showValidationErrors = computed(() => this.submitted() && this.form.invalid);

  submit(): void {
    if (this.form.invalid || this.status() === 'pending') {
      this.submitted.set(true);
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('pending');
    this.errorMessage.set(null);
    this.auth.register(this.form.getRawValue()).subscribe({
      next: () => {
        this.status.set('success');
        this.router.navigate(['/auth/verify'], { queryParams: { email: this.form.getRawValue().email } });
      },
      error: (error: Error) => {
        this.status.set('error');
        this.errorMessage.set(error.message);
      }
    });
  }

  isInvalid(controlName: 'fullName' | 'email'): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched || this.submitted());
  }

  goToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
