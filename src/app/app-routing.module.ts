import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {SinginComponent} from './singin/singin.component';
import {SingupComponent} from './singup/singup.component';

const routes: Routes  = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  {path:'sing in',component:SinginComponent},
  {path:'sing up',component:SingupComponent},
  { path:'login',component:LoginComponent},
  {path:'Head',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
