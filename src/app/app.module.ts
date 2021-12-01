import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient,  } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule
    
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
