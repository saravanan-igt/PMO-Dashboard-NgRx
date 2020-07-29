import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastChartComponent } from './forecast-chart.component';

describe('ForecastChartComponent', () => {
  let component: ForecastChartComponent;
  let fixture: ComponentFixture<ForecastChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
