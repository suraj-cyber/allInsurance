import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupData01Component } from './signup-data01.component';

describe('SignupData01Component', () => {
  let component: SignupData01Component;
  let fixture: ComponentFixture<SignupData01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupData01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupData01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
