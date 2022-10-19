import { TestBed } from '@angular/core/testing';

import { Login01Service } from './login01.service';

describe('Login01Service', () => {
  let service: Login01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Login01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
