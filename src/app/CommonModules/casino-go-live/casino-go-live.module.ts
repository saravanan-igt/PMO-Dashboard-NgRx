import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{CasinoGoLiveRoutingModule} from'./casino-go-live-routing.module';
import { RouterModule } from '@angular/router';
import { GamingGoLiveComponent } from 'src/app/CommonModules/casino-go-live/gaming-go-live.component';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RichTextEditorAllModule } from "@syncfusion/ej2-angular-richtexteditor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { NgxEchartsModule } from 'ngx-echarts';



@NgModule({
  declarations: [GamingGoLiveComponent ],
  imports: [
    CommonModule,
    CasinoGoLiveRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    RichTextEditorAllModule,
    BrowserAnimationsModule ,
    NgbModule,
    MaterialModule,
    NgxEchartsModule,
    CommonModule

  ]
})
export class CasinoGoLiveModule { }