import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetriaObdComponent } from './telemetria-obd.component';

describe('TelemetriaObdComponent', () => {
  let component: TelemetriaObdComponent;
  let fixture: ComponentFixture<TelemetriaObdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelemetriaObdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelemetriaObdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
