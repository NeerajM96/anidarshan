import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUploadStatusModalComponent } from './video-upload-status-modal.component';

describe('VideoUploadStatusModalComponent', () => {
  let component: VideoUploadStatusModalComponent;
  let fixture: ComponentFixture<VideoUploadStatusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoUploadStatusModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoUploadStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
