import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { AuthFacade } from '../data-access/auth.facade';

@Component({
  selector: 'dr-verify-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './verify-page.component.html',
  styleUrls: ['./verify-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerifyPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthFacade);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly email = signal(this.route.snapshot.queryParamMap.get('email') ?? '');
  readonly status = signal<'idle' | 'pending' | 'success' | 'error'>('idle');
  readonly message = signal<string>('');

  readonly form = this.fb.nonNullable.group({
    code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
  });

  submit(): void {
    if (this.form.invalid || this.status() === 'pending') {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('pending');
    this.message.set('');
    this.auth.verify({ email: this.email(), code: this.form.getRawValue().code }).subscribe({
      next: (valid) => {
        if (valid) {
          this.status.set('success');
          this.message.set('Verification successful. Redirecting…');
          this.router.navigate(['/profile']);
        } else {
          this.status.set('error');
          this.message.set('The verification code was not accepted.');
        }
      },
      error: (error: Error) => {
        this.status.set('error');
        this.message.set(error.message);
      }
    });
  }
}
