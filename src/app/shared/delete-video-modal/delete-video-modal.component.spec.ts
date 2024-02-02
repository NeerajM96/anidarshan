import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVideoModalComponent } from './delete-video-modal.component';

describe('DeleteVideoModalComponent', () => {
  let component: DeleteVideoModalComponent;
  let fixture: ComponentFixture<DeleteVideoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVideoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteVideoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
