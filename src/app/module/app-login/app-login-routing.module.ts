import { AppSignUpComponent } from './app-signUp.component';
import { AppFindPasswordComponent } from './app-findPassword.component';
// Angular Library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginShopComponent } from './app-loginShop.component';
import { AppLoginComponent } from './app-login.component';

// Service

const routes: Routes = [
  {
    path: '',
    component: AppLoginComponent,
    children: [
      {
        path: '',
        redirectTo: 'LoginShop',
        pathMatch: 'full',
      },
      {
        path: 'LoginShop',
        component: AppLoginShopComponent,
        // canActivateChild: [AuthGuardService],
      },
      {
        path: 'FindPassword',
        component: AppFindPasswordComponent,
        // canActivateChild: [AuthGuardService],
      },
      {
        path: 'SignUp',
        component: AppSignUpComponent,
        // canActivateChild: [AuthGuardService],
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLoginRoutingModule { }
