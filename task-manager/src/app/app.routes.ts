import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login';
import { Signup } from './components/signup/signup';
import { DashboardComponent } from './components/dashboard/dashboard';

export const routes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: 'signup', component: Signup },

  { path: 'dashboard', component: DashboardComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' }

];