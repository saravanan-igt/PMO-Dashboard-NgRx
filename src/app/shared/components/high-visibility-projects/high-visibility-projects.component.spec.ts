import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighVisibilityProjectsComponent } from './high-visibility-projects.component';

describe('HighVisibilityProjectsComponent', () => {
  let component: HighVisibilityProjectsComponent;
  let fixture: ComponentFixture<HighVisibilityProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighVisibilityProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighVisibilityProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
