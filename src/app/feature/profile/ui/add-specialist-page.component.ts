import { ChangeDetectionStrategy, Component, HostBinding, computed, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface UploadContactField {
  id: string;
  placeholder: string;
  type: string;
}

interface UploadSelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'dr-add-specialist-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-specialist-page.component.html',
  styleUrls: ['./add-specialist-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSpecialistPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  private readonly rosterFileSignal = signal<File | null>(null);
  private readonly photoFileSignal = signal<File | null>(null);

  readonly rosterFileName = computed(() =>
    this.rosterFileSignal() ? this.rosterFileSignal()!.name : 'Select roster file (CSV)'
  );
  readonly photoFileName = computed(() =>
    this.photoFileSignal() ? this.photoFileSignal()!.name : 'Upload photo...'
  );

  readonly genderOptions: UploadSelectOption[] = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'nonbinary', label: 'Non-binary' },
    { value: 'unspecified', label: 'Prefer not to say' }
  ];

  readonly languageOptions: UploadSelectOption[] = [
    { value: 'english', label: 'English' },
    { value: 'french', label: 'French' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'mandarin', label: 'Mandarin' },
    { value: 'arabic', label: 'Arabic' },
    { value: 'portuguese', label: 'Portuguese' }
  ];

  readonly domainOptions: UploadSelectOption[] = [
    { value: 'physiatrist', label: 'Physiatrist' },
    { value: 'occupational-therapist', label: 'Occupational therapist' },
    { value: 'neurologist', label: 'Neurologist' },
    { value: 'psychologist', label: 'Psychologist' }
  ];

  readonly specialtyOptions: UploadSelectOption[] = [
    { value: 'cat', label: 'CAT (Catastrophic Assessment)' },
    { value: 'chronic-pain', label: 'Chronic pain' },
    { value: 'mva', label: 'Motor vehicle accident' },
    { value: 'functional', label: 'Functional capacity' }
  ];

  readonly assessmentOptions: UploadSelectOption[] = [
    { value: 'paper', label: 'Paper / chart review' },
    { value: 'in-person', label: 'In-person evaluation' },
    { value: 'virtual', label: 'Virtual assessment' },
    { value: 'hybrid', label: 'Hybrid' }
  ];

  readonly contactFields: UploadContactField[] = [
    { id: 'fullAddress', placeholder: 'Full address', type: 'text' },
    { id: 'phone', placeholder: 'Phone', type: 'tel' },
    { id: 'email', placeholder: 'Email', type: 'email' }
  ];

  readonly form: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    description: [''],
    gender: [''],
    languages: [''],
    fieldOfPractice: [''],
    speciality: [''],
    assessmentType: [''],
    workingHours: [''],
    workingDays: [''],
    averageFees: [''],
    clinicHospital: [''],
    fullAddress: [''],
    phone: [''],
    email: ['', Validators.email],
    notes: ['']
  });

  @HostBinding('class.profile-add-specialist')
  protected readonly hostClass = true;

  readonly isUploadDisabled = computed(() => !this.rosterFileSignal());

  onSelectRoster(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0] ?? null;
    if (file && file.type !== 'text/csv') {
      this.rosterFileSignal.set(null);
      return;
    }
    this.rosterFileSignal.set(file);
  }

  onUploadRoster(): void {
    if (!this.rosterFileSignal()) {
      return;
    }
    // Placeholder for import service.
    console.info('Uploading roster CSV:', this.rosterFileSignal()!.name);
  }

  onSelectPhoto(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0] ?? null;
    this.photoFileSignal.set(file);
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = {
      ...this.form.getRawValue(),
      rosterFile: this.rosterFileSignal(),
      photoFile: this.photoFileSignal()
    };
    console.info('Submitting specialist payload', payload);
    this.router.navigate(['/profile']);
  }

  navigateBack(): void {
    this.router.navigate(['/profile']);
  }
}
