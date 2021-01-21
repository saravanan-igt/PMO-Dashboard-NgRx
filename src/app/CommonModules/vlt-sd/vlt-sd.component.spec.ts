import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VltSDComponent } from './vlt-sd.component';

describe('VltSDComponent', () => {
  let component: VltSDComponent;
  let fixture: ComponentFixture<VltSDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VltSDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VltSDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
