import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./features/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profile/profile.module')
      .then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'callback',
    loadChildren: () => import('./features/callback/callback.module').then(m => m.CallbackModule)
  },
  {
    path: '**',
    loadChildren: () => import('./features/not-found/not-found.module')
      .then(m => m.NotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot((routes))],
  exports: [RouterModule],
})
export class AppRoutingModule {}
