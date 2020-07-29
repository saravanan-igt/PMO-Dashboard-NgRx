import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotterySVComponent } from './lottery-sv.component';

describe('LotterySVComponent', () => {
  let component: LotterySVComponent;
  let fixture: ComponentFixture<LotterySVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotterySVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotterySVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
