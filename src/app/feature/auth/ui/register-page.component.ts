import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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
  readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    organization: ['']
  });
  readonly errorMessage = signal<string | null>(null);

  submit(): void {
    if (this.form.invalid || this.status() === 'pending') {
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
}
