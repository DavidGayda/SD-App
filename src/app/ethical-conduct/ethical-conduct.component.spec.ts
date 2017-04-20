import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicalConductComponent } from './ethical-conduct.component';

describe('EthicalConductComponent', () => {
  let component: EthicalConductComponent;
  let fixture: ComponentFixture<EthicalConductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthicalConductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthicalConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
