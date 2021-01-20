import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRndComponent } from './game-rnd.component';

describe('GameRndComponent', () => {
  let component: GameRndComponent;
  let fixture: ComponentFixture<GameRndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
