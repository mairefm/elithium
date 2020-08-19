import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetriaSensorizadaComponent } from './telemetria-sensorizada.component';

describe('TelemetriaSensorizadaComponent', () => {
  let component: TelemetriaSensorizadaComponent;
  let fixture: ComponentFixture<TelemetriaSensorizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelemetriaSensorizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelemetriaSensorizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
