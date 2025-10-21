import { Injectable, inject } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { DocRosterApiService } from '../../../data-access/doc-roster-api.service';
import { Assessment, Organization } from '../../../shared/data-access/models/assessment.model';

@Injectable({ providedIn: 'root' })
export class OrganizationsFacade {
  private readonly api = inject(DocRosterApiService);

  getOrganization(id: string): Observable<Organization | undefined> {
    return this.api.getOrganizations().pipe(map((organizations) => organizations.find((organization) => organization.id === id)));
  }

  getAssessments(id: string): Observable<Assessment[]> {
    return this.api.getAssessmentsByOrganization(id);
  }

  getOrganizationContext(id: string): Observable<{ organization?: Organization; assessments: Assessment[] }> {
    return combineLatest([this.getOrganization(id), this.getAssessments(id)]).pipe(
      map(([organization, assessments]) => ({ organization, assessments }))
    );
  }
}
