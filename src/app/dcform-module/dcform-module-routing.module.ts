import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../_helpers";
import { DcFormComponent } from "../dc-form/dc-form.component";
const routes: Routes = [
  { path: "" , component: DcFormComponent},
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DcformModuleRoutingModule { }
