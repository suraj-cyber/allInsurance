import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetails3Component } from './event-details3.component';

describe('EventDetails3Component', () => {
  let component: EventDetails3Component;
  let fixture: ComponentFixture<EventDetails3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetails3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
