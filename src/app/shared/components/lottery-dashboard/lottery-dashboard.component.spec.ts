import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryDashboardComponent } from './lottery-dashboard.component';

describe('LotteryDashboardComponent', () => {
  let component: LotteryDashboardComponent;
  let fixture: ComponentFixture<LotteryDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
