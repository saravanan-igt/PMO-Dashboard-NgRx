import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{CommonShareModule} from "../common-share/common-share.module";
import { GameDashboardComponent } from './game-dashboard.component';
import{CasinoDashboardRoutingModule} from'./casino-dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RichTextEditorAllModule } from "@syncfusion/ej2-angular-richtexteditor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { NgxEchartsModule } from "ngx-echarts";





@NgModule({
  declarations: [GameDashboardComponent],
  imports: [
    CommonModule,
    CasinoDashboardRoutingModule,
    RouterModule,
    CasinoDashboardModule,
    CommonShareModule,
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    RichTextEditorAllModule,
    BrowserAnimationsModule ,
    NgbModule,
    MaterialModule,
    NgxEchartsModule,
    CommonModule
],
})
export class CasinoDashboardModule { }