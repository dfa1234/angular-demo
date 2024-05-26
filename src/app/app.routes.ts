import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'users-table',
        pathMatch: 'full'
    },
    {
        path: 'users-table',
        loadComponent: () => import('./pages/users-table/users-table.component').then(m => m.UsersTableComponent)
    }
];
