import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Assessment, Organization } from '../shared/data-access/models/assessment.model';
import { Clinic } from '../shared/data-access/models/clinic.model';
import { Doctor } from '../shared/data-access/models/doctor.model';
import { FilterGroup } from '../shared/data-access/models/filter.model';
import { Review } from '../shared/data-access/models/review.model';
import { SearchResult } from '../shared/data-access/models/search-result.model';
import { UserProfile } from '../shared/data-access/models/user-profile.model';
import {
  MOCK_ASSESSMENTS,
  MOCK_CLINICS,
  MOCK_COMMUNITY_METRICS,
  MOCK_DOCTORS,
  MOCK_FILTERS,
  MOCK_ORGANIZATIONS,
  MOCK_PROFILE,
  MOCK_REVIEWS,
  MOCK_SEARCH_RESULTS
} from '../shared/data-access/mocks/doc-roster.mocks';
import { MockHttpClientService } from '../shared/data-access/mock-http-client.service';

@Injectable({ providedIn: 'root' })
export class DocRosterApiService {
  private readonly http = inject(MockHttpClientService);
  private readonly metricsSignal = signal(MOCK_COMMUNITY_METRICS);

  readonly metrics = computed(() => this.metricsSignal());

  getClinics(): Observable<Clinic[]> {
    return this.http.get(MOCK_CLINICS);
  }

  getClinicById(id: string): Observable<Clinic | undefined> {
    return this.getClinics().pipe(map((clinics) => clinics.find((clinic) => clinic.id === id)));
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get(MOCK_DOCTORS);
  }

  getDoctorById(id: string): Observable<Doctor | undefined> {
    return this.getDoctors().pipe(map((doctors) => doctors.find((doctor) => doctor.id === id)));
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get(MOCK_ORGANIZATIONS);
  }

  getAssessmentsByOrganization(organizationId: string): Observable<Assessment[]> {
    const assessments = MOCK_ASSESSMENTS.filter((assessment) => assessment.organizationId === organizationId);
    return this.http.get(assessments);
  }

  getReviewsForDoctor(doctorId: string): Observable<Review[]> {
    const reviews = MOCK_REVIEWS.filter((review) => review.doctorId === doctorId);
    return this.http.get(reviews);
  }


  getReviewById(reviewId: string): Observable<Review | undefined> {
    const review = MOCK_REVIEWS.find((item) => item.id === reviewId);
    return this.http.get(review as Review | undefined);
  }

  getFilters(): Observable<FilterGroup[]> {
    return this.http.get(MOCK_FILTERS);
  }

  getSearchResults(): Observable<SearchResult[]> {
    return this.http.get(MOCK_SEARCH_RESULTS);
  }

  getUserProfile(): Observable<UserProfile> {
    return this.http.get(MOCK_PROFILE);
  }

  updateNotificationPreference(enabled: boolean): Observable<UserProfile> {
    return this.http.mutate(() => {
      const nextProfile = { ...MOCK_PROFILE, notificationsEnabled: enabled };
      MOCK_PROFILE.notificationsEnabled = enabled;
      return nextProfile;
    });
  }
}
