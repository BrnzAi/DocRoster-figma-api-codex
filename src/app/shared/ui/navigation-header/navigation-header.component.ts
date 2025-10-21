import { AsyncPipe, NgIf } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthFacade } from '../../../feature/auth/data-access/auth.facade';

@Component({
  selector: 'dr-navigation-header',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf, AsyncPipe],
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent {
  private readonly auth = inject(AuthFacade);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  readonly isAuthenticated = computed(() => Boolean(this.auth.session()));
  readonly profileLink = computed(() => (this.isAuthenticated() ? '/profile' : '/auth/login'));
  readonly profileLabel = computed(() => (this.isAuthenticated() ? 'Profile' : 'Sign in'));

  readonly searchForm = this.fb.group({
    query: ['']
  });

  submitSearch(): void {
    const value = (this.searchForm.get('query')?.value ?? '').trim();
    this.router.navigate(['/search'], {
      queryParams: value ? { q: value } : {}
    });
  }
}
