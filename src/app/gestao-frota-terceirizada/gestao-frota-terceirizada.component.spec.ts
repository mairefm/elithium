import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoFrotaTerceirizadaComponent } from './gestao-frota-terceirizada.component';

describe('GestaoFrotaTerceirizadaComponent', () => {
  let component: GestaoFrotaTerceirizadaComponent;
  let fixture: ComponentFixture<GestaoFrotaTerceirizadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoFrotaTerceirizadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoFrotaTerceirizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
