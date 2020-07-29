import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VltRndComponent } from './vlt-rnd.component';

describe('VltRndComponent', () => {
  let component: VltRndComponent;
  let fixture: ComponentFixture<VltRndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VltRndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VltRndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
