import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VltCustomerComponent } from './vlt-customer.component';

describe('VltCustomerComponent', () => {
  let component: VltCustomerComponent;
  let fixture: ComponentFixture<VltCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VltCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VltCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
