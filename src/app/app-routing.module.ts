import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiInt01Component } from './apiIntegration/api-int01/api-int01.component';
import { HomeComponent } from './home/home.component';
import { Login01Component } from './loginAPIInt/login01/login01.component';
import { SignUp01Component } from './signupAPIInt/sign-up01/sign-up01.component';
import { SignupData01Component } from './signupAPIInt/signup-data01/signup-data01.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'pages', loadChildren:()=>import('./pages/pages.module')
.then(mod=>mod.PagesModule)},
{path:'apiInt01', component: ApiInt01Component},
{path:'signUp01', component: SignUp01Component},
{path:'signupData', component: SignupData01Component},
{path:'login01', component: Login01Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
