import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerAndDevelopmentComponent } from './career-and-development.component';

describe('CareerAndDevelopmentComponent', () => {
  let component: CareerAndDevelopmentComponent;
  let fixture: ComponentFixture<CareerAndDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerAndDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerAndDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
