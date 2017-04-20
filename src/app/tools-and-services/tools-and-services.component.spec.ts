import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsAndServicesComponent } from './tools-and-services.component';

describe('ToolsAndServicesComponent', () => {
  let component: ToolsAndServicesComponent;
  let fixture: ComponentFixture<ToolsAndServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsAndServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
