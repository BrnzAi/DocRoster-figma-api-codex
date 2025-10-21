import { Injectable, inject } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { DocRosterApiService } from '../../../data-access/doc-roster-api.service';
import { Clinic } from '../../../shared/data-access/models/clinic.model';
import { Doctor } from '../../../shared/data-access/models/doctor.model';
import { Review } from '../../../shared/data-access/models/review.model';

@Injectable({ providedIn: 'root' })
export class SpecialistFacade {
  private readonly api = inject(DocRosterApiService);

  getDoctor(id: string): Observable<Doctor | undefined> {
    return this.api.getDoctorById(id);
  }

  getClinicForDoctor(doctorId: string): Observable<Clinic | undefined> {
    return this.getDoctor(doctorId).pipe(
      switchMap((doctor) => (doctor ? this.api.getClinicById(doctor.clinicId) : this.api.getClinics().pipe(map(() => undefined))))
    );
  }

  getReviews(doctorId: string): Observable<Review[]> {
    return this.api.getReviewsForDoctor(doctorId);
  }

  getDoctorProfileContext(doctorId: string): Observable<{ doctor?: Doctor; clinic?: Clinic; reviews: Review[] }> {
    return combineLatest([
      this.getDoctor(doctorId),
      this.getClinicForDoctor(doctorId),
      this.getReviews(doctorId)
    ]).pipe(
      map(([doctor, clinic, reviews]) => ({ doctor, clinic, reviews }))
    );
  }
}
