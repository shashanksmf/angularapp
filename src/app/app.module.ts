import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Login1Component } from './login1/login1.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrthoLoginComponent } from './ortho-login/ortho-login.component';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'login', component: Login1Component },
  { path: 'login2', component: LoginComponent },
  { path: 'orthoLogin', component: OrthoLoginComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    Login1Component,
    LoginComponent,
    HomeComponent,
    OrthoLoginComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
