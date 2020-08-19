import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadaTrabalhoComponent } from './jornada-trabalho.component';

describe('JornadaTrabalhoComponent', () => {
  let component: JornadaTrabalhoComponent;
  let fixture: ComponentFixture<JornadaTrabalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JornadaTrabalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JornadaTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
