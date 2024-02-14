import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableCommentsComponent } from './collapsable-comments.component';

describe('CollapsableCommentsComponent', () => {
  let component: CollapsableCommentsComponent;
  let fixture: ComponentFixture<CollapsableCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsableCommentsComponent]
    });
    fixture = TestBed.createComponent(CollapsableCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
