import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashDailogComponent } from './trash-dailog.component';

describe('TrashDailogComponent', () => {
  let component: TrashDailogComponent;
  let fixture: ComponentFixture<TrashDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
