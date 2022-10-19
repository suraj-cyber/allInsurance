import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetails1Component } from './event-details1.component';

describe('EventDetails1Component', () => {
  let component: EventDetails1Component;
  let fixture: ComponentFixture<EventDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetails1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
