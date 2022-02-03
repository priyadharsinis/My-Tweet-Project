import { AuthGuard } from './auth.guard';

import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Register/register/register.component';
import { LoginComponent } from './Login/login/login.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '', 
    component: LoginComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'register',
     component:RegisterComponent
    },
  {
    path:'forgot', 
    component:ForgotComponent
  },
  {
    path: 'home',
     component:HomeComponent,
     canActivate : [AuthGuard]
     },
  {
    path:'user', 
    component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, 
                                  RegisterComponent,
                                  HomeComponent,
                                UserComponent];
