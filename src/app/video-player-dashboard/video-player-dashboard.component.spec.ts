import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerDashboardComponent } from './video-player-dashboard.component';

describe('VideoPlayerDashboardComponent', () => {
  let component: VideoPlayerDashboardComponent;
  let fixture: ComponentFixture<VideoPlayerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoPlayerDashboardComponent]
    });
    fixture = TestBed.createComponent(VideoPlayerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
