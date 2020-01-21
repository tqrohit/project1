import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtformComponent } from './dtform.component';

describe('DtformComponent', () => {
  let component: DtformComponent;
  let fixture: ComponentFixture<DtformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
