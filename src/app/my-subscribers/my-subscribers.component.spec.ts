import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySubscribersComponent } from './my-subscribers.component';

describe('MySubscribersComponent', () => {
  let component: MySubscribersComponent;
  let fixture: ComponentFixture<MySubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySubscribersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
