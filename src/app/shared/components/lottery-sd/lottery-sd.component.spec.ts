import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotterySDComponent } from './lottery-sd.component';

describe('LotterySDComponent', () => {
  let component: LotterySDComponent;
  let fixture: ComponentFixture<LotterySDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotterySDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotterySDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
