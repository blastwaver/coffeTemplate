import { AppFindPasswordComponent } from './app-findPassword.component';
// Angular Libarary
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppLoginShopComponent } from './app-loginShop.component';
import { AppLoginComponent } from './app-login.component';
import { AppLoginRoutingModule } from './app-login-routing.module';
import { AppSignUpComponent } from './app-signUp.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppLoginRoutingModule
  ],
  declarations: [
    AppLoginShopComponent,
    AppLoginComponent,
    AppFindPasswordComponent,
    AppSignUpComponent
  ],
  exports: [
    AppLoginShopComponent,
    AppLoginComponent,
    AppFindPasswordComponent,
    AppSignUpComponent,
    CommonModule
  ],
  providers: [
  ]
})

export class AppLoginModule { }
