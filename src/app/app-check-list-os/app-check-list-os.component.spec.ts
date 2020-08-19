import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCheckListOsComponent } from './app-check-list-os.component';

describe('AppCheckListOsComponent', () => {
  let component: AppCheckListOsComponent;
  let fixture: ComponentFixture<AppCheckListOsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCheckListOsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCheckListOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
