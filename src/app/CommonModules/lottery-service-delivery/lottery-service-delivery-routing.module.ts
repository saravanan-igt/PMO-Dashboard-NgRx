import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LotterySVComponent } from 'src/app/shared/components/lottery-sv/lottery-sv.component';


const routes: Routes = [
  {path:'lotterySv',
component:LotterySVComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryServiceDeliveryRoutingModule { }
