import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ApiInt01Component } from './apiIntegration/api-int01/api-int01.component';
import { ApiInt02Component } from './apiIntegration/api-int02/api-int02.component';
import { SignUp01Component } from './signupAPIInt/sign-up01/sign-up01.component';
import { Login01Component } from './loginAPIInt/login01/login01.component';
import { SignupData01Component } from './signupAPIInt/signup-data01/signup-data01.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApiInt01Component,
    ApiInt02Component,
    SignUp01Component,
    Login01Component,
    SignupData01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
