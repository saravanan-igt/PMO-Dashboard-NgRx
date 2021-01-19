import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../../shared/material-module";
import { DcformRoutingModule } from './dcform-routing.module';
import { DcFormComponent } from "../../dc-form/dc-form.component";
import { RichTextEditorAllModule } from "@syncfusion/ej2-angular-richtexteditor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [DcFormComponent],
  imports: [
    CommonModule,
    DcformRoutingModule,RichTextEditorAllModule,FormsModule, ReactiveFormsModule,NgbModule,MaterialModule
  ]
})
export class DcformModule { }
