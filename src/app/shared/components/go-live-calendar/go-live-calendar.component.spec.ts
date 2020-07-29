import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoLiveCalendarComponent } from './go-live-calendar.component';

describe('GoLiveCalendarComponent', () => {
  let component: GoLiveCalendarComponent;
  let fixture: ComponentFixture<GoLiveCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoLiveCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoLiveCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
