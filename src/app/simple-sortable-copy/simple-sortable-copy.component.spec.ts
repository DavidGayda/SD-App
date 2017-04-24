import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSortableCopyComponent } from './simple-sortable-copy.component';

describe('SimpleSortableCopyComponent', () => {
  let component: SimpleSortableCopyComponent;
  let fixture: ComponentFixture<SimpleSortableCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleSortableCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleSortableCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
