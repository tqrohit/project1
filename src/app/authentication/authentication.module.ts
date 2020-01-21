import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ParticlesModule } from 'angular-particle';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    ParticlesModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
  ],
  providers: [],
})
export class AuthenticationModule { }
