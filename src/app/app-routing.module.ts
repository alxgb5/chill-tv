import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { RoutesList } from '../routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesList.Dashboard,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: RoutesList.NotFound,
    loadChildren: () => import('../app/404/not-found.module').then(m => m.NotFoundModule),
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () => import('../app/404/not-found.module').then(m => m.NotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
