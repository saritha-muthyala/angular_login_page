import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from'@angular/material/toolbar';


import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [
    
  
    AppComponent,
    HomeComponent,
    LoginComponent,
    SinginComponent,
    SingupComponent
  ],
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
