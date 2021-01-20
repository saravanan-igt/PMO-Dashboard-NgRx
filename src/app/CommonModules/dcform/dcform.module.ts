import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DcformRoutingModule } from './dcform-routing.module';
import { DcFormComponent } from "./dc-form.component";
import { CommonShareModule } from '../../common-share/common-share.module';
import { MaterialModule } from "src/app/shared/material-module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RichTextEditorAllModule } from "@syncfusion/ej2-angular-richtexteditor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [DcFormComponent],
  imports: [
    CommonModule,
    DcformRoutingModule,
    CommonShareModule,
    MaterialModule,
    NgbModule,RichTextEditorAllModule,FormsModule,ReactiveFormsModule
  ]
})
export class DcformModule { }
