import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosDemonstracaoComponent } from './videos-demonstracao.component';

describe('VideosDemonstracaoComponent', () => {
  let component: VideosDemonstracaoComponent;
  let fixture: ComponentFixture<VideosDemonstracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosDemonstracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosDemonstracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
