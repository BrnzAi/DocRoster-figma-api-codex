import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { DocRosterApiService } from '../../../data-access/doc-roster-api.service';
import { ProfileFacade } from '../data-access/profile.facade';

@Component({
    selector: 'dr-profile-page',
    standalone: true,
    imports: [AsyncPipe, NgIf, NgFor, RouterLink],
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent {
  private readonly facade = inject(ProfileFacade);
  private readonly api = inject(DocRosterApiService);

  readonly vm$ = combineLatest([this.facade.profile$, this.api.getDoctors()]).pipe(
    map(([profile, doctors]) => ({
      profile,
      specialists: doctors.slice(0, 4).map((doctor, index) => ({
        doctor,
        avatar: PROFILE_AVATARS[index % PROFILE_AVATARS.length],
        schedule: formatSchedule(doctor.availability?.[0])
      }))
    }))
  );
  readonly isSaving = this.facade.isSaving;

  onToggleNotifications(enabled: boolean): void {
    this.facade.updateNotificationPreference(enabled).subscribe();
  }
}

const PROFILE_AVATARS = [
  'assets/figma/profile/1814_506.png',
  'assets/figma/profile/1814_521.png',
  'assets/figma/profile/1814_536.png',
  'assets/figma/profile/1814_551.png'
];

function formatSchedule(entry?: { day: string; times: string[] }): string {
  if (!entry) {
    return '';
  }
  const firstTime = entry.times?.[0] ?? '';
  return `${entry.day}${firstTime ? ' · ' + firstTime : ''}`;
}
