import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { AssessmentCardComponent } from '../../../shared/ui/assessment-card/assessment-card.component';
import { SectionHeaderComponent } from '../../../shared/ui/section-header/section-header.component';
import { OrganizationsFacade } from '../data-access/organizations.facade';

@Component({
  selector: 'dr-organization-assessments-page',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, SectionHeaderComponent, AssessmentCardComponent],
  templateUrl: './organization-assessments-page.component.html',
  styleUrls: ['./organization-assessments-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationAssessmentsPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly facade = inject(OrganizationsFacade);

  readonly context$ = this.route.paramMap.pipe(
    map((params) => params.get('id') ?? ''),
    switchMap((id) => this.facade.getOrganizationContext(id))
  );
}
