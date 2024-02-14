import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableSideBarComponent } from './collapsable-side-bar.component';

describe('CollapsableSideBarComponent', () => {
  let component: CollapsableSideBarComponent;
  let fixture: ComponentFixture<CollapsableSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsableSideBarComponent]
    });
    fixture = TestBed.createComponent(CollapsableSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
