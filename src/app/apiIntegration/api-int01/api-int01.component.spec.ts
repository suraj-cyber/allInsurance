import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiInt01Component } from './api-int01.component';

describe('ApiInt01Component', () => {
  let component: ApiInt01Component;
  let fixture: ComponentFixture<ApiInt01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiInt01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiInt01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
