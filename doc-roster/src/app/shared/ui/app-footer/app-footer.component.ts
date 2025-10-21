import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  path: string;
}

@Component({
  selector: 'dr-app-footer',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent {
  readonly resources: FooterLink[] = [
    { label: 'Product roadmap', path: '/review/rev-aurora-1' },
    { label: 'Clinical library', path: '/search' },
    { label: 'DocRoster pilots', path: '/map' }
  ];

  readonly support: FooterLink[] = [
    { label: 'Help centre', path: '/auth/recover' },
    { label: 'Privacy', path: '/profile' },
    { label: 'Status', path: '/upload' }
  ];
}
