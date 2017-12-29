import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCafeComponent } from './edit-cafe.component';

describe('EditCafeComponent', () => {
  let component: EditCafeComponent;
  let fixture: ComponentFixture<EditCafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
