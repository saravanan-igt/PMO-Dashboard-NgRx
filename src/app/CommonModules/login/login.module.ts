import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonShareModule } from '../../common-share/common-share.module';
// import { CalenderModule } from "igt-calenderchart-lib";
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CommonShareModule,
    FormsModule,ReactiveFormsModule,
    // CalenderModule
  ],
})
export class LoginModule { 
}
