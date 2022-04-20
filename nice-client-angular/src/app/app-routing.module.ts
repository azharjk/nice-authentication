import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginEmailComponent } from './login/login-email/login-email.component';
import { LoginPasswordComponent } from './login/login-password/login-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'email',
        component: LoginEmailComponent
      },
      {
        path: 'password',
        component: LoginPasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
