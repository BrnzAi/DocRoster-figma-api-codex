import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { SectionHeaderComponent } from '../../../shared/ui/section-header/section-header.component';
import { UploadFacade } from '../data-access/upload.facade';

@Component({
    selector: 'dr-upload-page',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, SectionHeaderComponent],
    templateUrl: './upload-page.component.html',
    styleUrls: ['./upload-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly facade = inject(UploadFacade);

  readonly form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(4)]],
    organization: ['', Validators.required],
    category: ['', Validators.required],
    summary: ['', [Validators.required, Validators.minLength(12)]],
    fileName: ['', Validators.required]
  });
  readonly status = signal<'idle' | 'uploading' | 'complete' | 'error'>('idle');
  readonly progress = this.facade.progress;
  readonly isUploading = this.facade.isUploading;
  readonly result = signal<string | null>(null);

  submit(): void {
    if (this.form.invalid || this.status() === 'uploading') {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('uploading');
    this.facade.upload(this.form.getRawValue()).subscribe({
      next: (response) => {
        this.status.set('complete');
        this.result.set(`Submission ${response.id} queued · ${response.nextStep} (ETA ${response.eta})`);
        this.form.reset({ title: '', organization: '', category: '', summary: '', fileName: '' });
      },
      error: (error: Error) => {
        this.status.set('error');
        this.result.set(error.message);
      }
    });
  }
}
