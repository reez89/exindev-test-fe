import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/client-list/client-list.component').then(r => r.ClientListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/card-detail/card-detail.component').then(r => r.CardDetailComponent)
  }
];
