import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotterySvcComponent } from './lottery-svc.component';

describe('LotterySvcComponent', () => {
  let component: LotterySvcComponent;
  let fixture: ComponentFixture<LotterySvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotterySvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotterySvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
