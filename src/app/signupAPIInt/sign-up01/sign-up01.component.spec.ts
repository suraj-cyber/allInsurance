import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUp01Component } from './sign-up01.component';

describe('SignUp01Component', () => {
  let component: SignUp01Component;
  let fixture: ComponentFixture<SignUp01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUp01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUp01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
