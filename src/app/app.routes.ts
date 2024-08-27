import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RefrashComponent } from './pages/refresh/refrash.component';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "refrash-password",
    component: RefrashComponent
  }
];
