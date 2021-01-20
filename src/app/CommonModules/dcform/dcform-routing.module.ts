import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DcFormComponent } from "./dc-form.component";

const routes: Routes = [
  {path:'',
  component: DcFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DcformRoutingModule { }
