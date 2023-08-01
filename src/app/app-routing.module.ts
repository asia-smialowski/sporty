import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {LoginComponent} from "./auth/login/login.component";
import {TrainingComponent} from "./training/training.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'welcome',
    title: 'Welcome page',
    component: WelcomeComponent },
  {
    path: 'signup',
    title: 'Sign up',
    component: SignupComponent
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'training',
    title: 'Training',
    component: TrainingComponent
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component:  PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot((routes))],
  exports: [RouterModule],
})
export class AppRoutingModule {}
