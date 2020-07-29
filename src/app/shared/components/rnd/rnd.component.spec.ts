import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RndComponent } from './rnd.component';

describe('RndComponent', () => {
  let component: RndComponent;
  let fixture: ComponentFixture<RndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
