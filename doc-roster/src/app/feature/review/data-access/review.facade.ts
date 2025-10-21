import { Injectable, inject } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { DocRosterApiService } from '../../../data-access/doc-roster-api.service';
import { Clinic } from '../../../shared/data-access/models/clinic.model';
import { Doctor } from '../../../shared/data-access/models/doctor.model';
import { Review } from '../../../shared/data-access/models/review.model';

@Injectable({ providedIn: 'root' })
export class ReviewFacade {
  private readonly api = inject(DocRosterApiService);

  getReview(reviewId: string): Observable<Review | undefined> {
    return this.api.getReviewById(reviewId);
  }

  getDoctorForReview(reviewId: string): Observable<Doctor | undefined> {
    return this.getReview(reviewId).pipe(
      switchMap((review) => (review ? this.api.getDoctorById(review.doctorId) : this.api.getDoctors().pipe(map(() => undefined))))
    );
  }

  getClinicForReview(reviewId: string): Observable<Clinic | undefined> {
    return this.getDoctorForReview(reviewId).pipe(
      switchMap((doctor) => (doctor ? this.api.getClinicById(doctor.clinicId) : this.api.getClinics().pipe(map(() => undefined))))
    );
  }

  getReviewContext(reviewId: string): Observable<{ review?: Review; doctor?: Doctor; clinic?: Clinic }> {
    return combineLatest([
      this.getReview(reviewId),
      this.getDoctorForReview(reviewId),
      this.getClinicForReview(reviewId)
    ]).pipe(map(([review, doctor, clinic]) => ({ review, doctor, clinic })));
  }
}
