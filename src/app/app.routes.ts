import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => loadRemoteModule('products', './Component').then((c) => c.App),
  },
  {
    path: 'users',
    loadComponent: () => loadRemoteModule('users', './Component').then((c) => c.App),
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
];
