import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { AuthFacade } from '../../../feature/auth/data-access/auth.facade';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'dr-navigation-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, NgFor, NgClass, AsyncPipe],
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent {
  private readonly auth = inject(AuthFacade);

  readonly menuOpen = signal(false);
  readonly links: NavLink[] = [
    { label: 'Map', path: '/' },
    { label: 'Search', path: '/search' },
    { label: 'Filters', path: '/filters' },
    { label: 'Assessments', path: '/organizations/org-northstar/assessments' },
    { label: 'Upload', path: '/upload' }
  ];

  readonly isAuthenticated = computed(() => Boolean(this.auth.session()));

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  signOut(): void {
    this.auth.signOut();
    this.closeMenu();
  }
}
