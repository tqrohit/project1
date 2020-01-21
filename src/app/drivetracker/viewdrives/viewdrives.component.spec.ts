import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdrivesComponent } from './viewdrives.component';

describe('ViewdrivesComponent', () => {
  let component: ViewdrivesComponent;
  let fixture: ComponentFixture<ViewdrivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdrivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
