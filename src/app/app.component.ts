import { NgIf } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';

import { AppFooterComponent } from './shared/ui/app-footer/app-footer.component';
import { MapShellComponent } from './shared/ui/map-shell/map-shell.component';
import { NavigationHeaderComponent } from './shared/ui/navigation-header/navigation-header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavigationHeaderComponent, AppFooterComponent, MapShellComponent, NgIf],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly router = inject(Router);

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url)
    ),
    { initialValue: this.router.url }
  );

  readonly showChrome = computed(() => {
    const url = this.currentUrl();
    const hiddenRoutes = ['/auth', '/search', '/profile', '/specialists'];
    return !hiddenRoutes.some((path) => url.startsWith(path));
  });

  readonly isMapInteractive = computed(() => {
    const url = this.currentUrl();
    return url.startsWith('/search') || url.startsWith('/specialists');
  });
}
