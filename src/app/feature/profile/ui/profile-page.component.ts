import { AsyncPipe, DatePipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SectionHeaderComponent } from '../../../shared/ui/section-header/section-header.component';
import { TagListComponent } from '../../../shared/ui/tag-list/tag-list.component';
import { ProfileFacade } from '../data-access/profile.facade';

@Component({
  selector: 'dr-profile-page',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, TitleCasePipe, DatePipe, SectionHeaderComponent, TagListComponent],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent {
  private readonly facade = inject(ProfileFacade);

  readonly profile$ = this.facade.profile$;
  readonly isSaving = this.facade.isSaving;

  onToggleNotifications(enabled: boolean): void {
    this.facade.updateNotificationPreference(enabled).subscribe();
  }
}
