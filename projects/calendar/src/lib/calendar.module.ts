import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { TestComponent } from './test/test.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CalendarComponent, TestComponent],
  imports: [GoogleMapsModule,CommonModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
