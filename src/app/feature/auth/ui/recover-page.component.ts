import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AuthFacade } from '../data-access/auth.facade';

@Component({
    selector: 'dr-recover-page',
    standalone: true,
    imports: [ReactiveFormsModule, RouterLink, NgIf],
    templateUrl: './recover-page.component.html',
    styleUrls: ['./recover-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecoverPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthFacade);

  readonly status = signal<'idle' | 'pending' | 'success' | 'error'>('idle');
  readonly submitted = signal(false);
  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]]
  });
  readonly message = signal<string>('');

  submit(): void {
    if (this.form.invalid || this.status() === 'pending') {
      this.submitted.set(true);
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('pending');
    this.auth.recover(this.form.getRawValue()).subscribe({
      next: (result) => {
        this.status.set('success');
        this.message.set(`Recovery email sent to ${result.email}`);
      },
      error: (error: Error) => {
        this.status.set('error');
        this.message.set(error.message);
      }
    });
  }

  isInvalid(): boolean {
    const control = this.form.controls.email;
    return control.invalid && (control.dirty || control.touched || this.submitted());
  }
}
