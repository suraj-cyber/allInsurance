import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetails4Component } from './event-details4.component';

describe('EventDetails4Component', () => {
  let component: EventDetails4Component;
  let fixture: ComponentFixture<EventDetails4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDetails4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetails4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
