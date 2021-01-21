import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RichTextEditorAllModule } from "@syncfusion/ej2-angular-richtexteditor";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "./shared/material-module";
import { ParticlesModule } from "angular-particle";
import { HttpClientModule } from "@angular/common/http";
import { LoaderComponent } from "./shared/loader/loader.component";
import { LoaderService } from "./services/loader.service";
import { CommonService } from "./services/common.service";
import { PageLoaderService } from "./services/page-loader.service";
import { HTTP_INTERCEPTORS, HttpClient } from "@angular/common/http";
import { LoaderInterceptor } from "./loader.interceptor";
import { NgxEchartsModule } from "ngx-echarts";
import { ErrorInterceptor } from "./_helpers";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DataEffects } from "./Store/data.effects";
import { DataReducer } from "./Store/data.reducer";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RichTextEditorAllModule,
    NgbModule,
    MaterialModule,
    ParticlesModule,
    HttpClientModule,
    NgxEchartsModule,
    NgbModule,
    StoreModule.forRoot({ data: DataReducer }),
    EffectsModule.forRoot([DataEffects]),
    PerfectScrollbarModule,
  ],
  providers: [
    LoaderService,
    PageLoaderService,
    CommonService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ],
})
export class AppModule {}
