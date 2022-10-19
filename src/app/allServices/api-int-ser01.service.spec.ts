import { TestBed } from '@angular/core/testing';

import { ApiIntSer01Service } from './api-int-ser01.service';

describe('ApiIntSer01Service', () => {
  let service: ApiIntSer01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIntSer01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
