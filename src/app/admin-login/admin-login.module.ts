import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLoginRoutingModule } from './admin-login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,AdminLoginRoutingModule,FormsModule, ReactiveFormsModule
   
  ],
})
export class AdminLoginModule { }
