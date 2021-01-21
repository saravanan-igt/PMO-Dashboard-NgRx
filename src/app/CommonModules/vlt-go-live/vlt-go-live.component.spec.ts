import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VltGoLiveComponent } from './vlt-go-live.component';

describe('VltGoLiveComponent', () => {
  let component: VltGoLiveComponent;
  let fixture: ComponentFixture<VltGoLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VltGoLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VltGoLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
