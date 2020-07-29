import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingGoLiveComponent } from './gaming-go-live.component';

describe('GamingGoLiveComponent', () => {
  let component: GamingGoLiveComponent;
  let fixture: ComponentFixture<GamingGoLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingGoLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingGoLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
