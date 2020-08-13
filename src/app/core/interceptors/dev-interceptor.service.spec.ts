import { TestBed } from '@angular/core/testing';

import { DevInterceptorService } from './dev-interceptor.service';

describe('DevInterceptorService', () => {
  let service: DevInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
