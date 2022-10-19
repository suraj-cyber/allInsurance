import { TestBed } from '@angular/core/testing';

import { SignUp01Service } from './sign-up01.service';

describe('SignUp01Service', () => {
  let service: SignUp01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUp01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
