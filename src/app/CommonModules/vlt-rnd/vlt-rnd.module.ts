import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{vltRndRoutingModule} from'./vlt-rnd-routing.module';
import { RouterModule } from '@angular/router';
import {CommonShareModule} from '../common-share/common-share.module';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RichTextEditorAllModule } from "@syncfusion/ej2-angular-richtexteditor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "src/app/shared/material-module";
import { NgxEchartsModule } from 'ngx-echarts';

import { AmountPipe } from "src/app/pipes/amount.pipe";
import { ParticlesModule } from "angular-particle";
import { HttpClientModule } from "@angular/common/http";
import { LoaderService } from "src/app/services/loader.service";
import { CommonService } from "src/app/services/common.service";
import { PageLoaderService } from "src/app/services/page-loader.service";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { LoaderInterceptor } from "src/app/loader.interceptor";
import { ErrorInterceptor } from "src/app/_helpers";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DataEffects } from "src/app/store/data.effects";
import { DataReducer } from "src/app/store/data.reducer";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { VltRndComponent } from './vlt-rnd.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
 };

@NgModule({
  declarations: [VltRndComponent,AmountPipe],
  imports: [
    CommonModule,
    vltRndRoutingModule,
    RouterModule,
    CommonShareModule,
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    RichTextEditorAllModule,
    BrowserAnimationsModule ,
    NgbModule,
    MaterialModule,
    NgxEchartsModule

  ],
  providers:[
    LoaderService,
    PageLoaderService,
    CommonService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    }
  ]
})
export class VltRndModule { }
