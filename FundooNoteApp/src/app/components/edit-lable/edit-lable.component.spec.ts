import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLableComponent } from './edit-lable.component';

describe('EditLableComponent', () => {
  let component: EditLableComponent;
  let fixture: ComponentFixture<EditLableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
