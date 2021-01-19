import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DcFormComponent } from "../dc-form/dc-form.component";
import { RichTextEditorAllModule } from "@syncfusion/ej2-angular-richtexteditor";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../shared/material-module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [DcFormComponent],
  imports: [
    CommonModule,
    RichTextEditorAllModule,
    MaterialModule,
    FormsModule,ReactiveFormsModule,NgbModule
  ]
})
export class DcformModuleModule { }
