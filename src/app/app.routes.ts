import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MemoryDetails } from './pages/memory-details/memory-details';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },
  {
    path: 'memory/:id',
    component: MemoryDetails,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
