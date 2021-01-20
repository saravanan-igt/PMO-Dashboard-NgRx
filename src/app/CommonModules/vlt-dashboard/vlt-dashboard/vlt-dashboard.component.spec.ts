import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VltDashboardComponent } from './vlt-dashboard.component';

describe('VltDashboardComponent', () => {
  let component: VltDashboardComponent;
  let fixture: ComponentFixture<VltDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VltDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VltDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
