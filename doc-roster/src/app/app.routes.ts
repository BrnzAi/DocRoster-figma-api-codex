import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/map/ui/map-page.component').then((m) => m.MapPageComponent),
    title: 'DocRoster — Explore healthcare on the map'
  },
  {
    path: 'search',
    loadComponent: () => import('./feature/search/ui/search-page.component').then((m) => m.SearchPageComponent),
    title: 'DocRoster — Search specialists'
  },
  {
    path: 'filters',
    loadComponent: () => import('./feature/filters/ui/filters-page.component').then((m) => m.FiltersPageComponent),
    title: 'DocRoster — Smart filters'
  },
  {
    path: 'specialists/:id',
    loadComponent: () => import('./feature/specialist/ui/specialist-page.component').then((m) => m.SpecialistPageComponent),
    title: 'DocRoster — Specialist profile'
  },
  {
    path: 'organizations/:id/assessments',
    loadComponent: () => import('./feature/organizations/ui/organization-assessments-page.component').then((m) => m.OrganizationAssessmentsPageComponent),
    title: 'DocRoster — Organization assessments'
  },
  {
    path: 'profile',
    loadComponent: () => import('./feature/profile/ui/profile-page.component').then((m) => m.ProfilePageComponent),
    title: 'DocRoster — Your profile'
  },
  {
    path: 'upload',
    loadComponent: () => import('./feature/upload/ui/upload-page.component').then((m) => m.UploadPageComponent),
    title: 'DocRoster — Upload assessments'
  },
  {
    path: 'review/:id',
    loadComponent: () => import('./feature/review/ui/review-page.component').then((m) => m.ReviewPageComponent),
    title: 'DocRoster — Review submission'
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        loadComponent: () => import('./feature/auth/ui/login-page.component').then((m) => m.LoginPageComponent),
        title: 'DocRoster — Sign in'
      },
      {
        path: 'register',
        loadComponent: () => import('./feature/auth/ui/register-page.component').then((m) => m.RegisterPageComponent),
        title: 'DocRoster — Create account'
      },
      {
        path: 'recover',
        loadComponent: () => import('./feature/auth/ui/recover-page.component').then((m) => m.RecoverPageComponent),
        title: 'DocRoster — Recover access'
      },
      {
        path: 'verify',
        loadComponent: () => import('./feature/auth/ui/verify-page.component').then((m) => m.VerifyPageComponent),
        title: 'DocRoster — Verify identity'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
