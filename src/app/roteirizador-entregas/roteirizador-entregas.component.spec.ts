import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoteirizadorEntregasComponent } from './roteirizador-entregas.component';

describe('RoteirizadorEntregasComponent', () => {
  let component: RoteirizadorEntregasComponent;
  let fixture: ComponentFixture<RoteirizadorEntregasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoteirizadorEntregasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoteirizadorEntregasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
