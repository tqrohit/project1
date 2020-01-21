import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DtformComponent } from './drivetracker/dtform/dtform.component';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReactiveFormsModule} from '@angular/forms';
import { ViewdrivesComponent } from './drivetracker/viewdrives/viewdrives.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import {  MatDatepickerModule, MatInputModule, MatNativeDateModule, MatSelectModule, MatExpansionModule  } from '@angular/material';
import { BlockUIModule } from 'ng-block-ui';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addDrive', component: DtformComponent },
  { path: 'viewalldrive', component: ViewdrivesComponent },
];

@NgModule({
  declarations: [DashboardComponent, NavbarComponent,DtformComponent,ViewdrivesComponent,FilterPipe],
  imports: [
    BlockUIModule.forRoot() ,
    RouterModule.forRoot(
      routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
       MatDatepickerModule,MatInputModule,MatNativeDateModule,MatSelectModule,MatExpansionModule
  ],
  
  exports: [RouterModule, DashboardComponent, NavbarComponent,DtformComponent,ViewdrivesComponent],
})
export class AppRoutingModule { }

