import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatusRadioButtonComponent } from './status-radio-button.component';

describe('SortCheckboxComponent', () => {
  let component: StatusRadioButtonComponent;
  let fixture: ComponentFixture<StatusRadioButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
