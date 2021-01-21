import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCustomerComponent } from './game-customer.component';

describe('GameCustomerComponent', () => {
  let component: GameCustomerComponent;
  let fixture: ComponentFixture<GameCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
