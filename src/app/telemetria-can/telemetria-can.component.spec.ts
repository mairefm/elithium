import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetriaCanComponent } from './telemetria-can.component';

describe('TelemetriaCanComponent', () => {
  let component: TelemetriaCanComponent;
  let fixture: ComponentFixture<TelemetriaCanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelemetriaCanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelemetriaCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
