import { TestBed } from '@angular/core/testing';

import { DevApiService } from './dev-api.service';

describe('DevApiService', () => {
  let service: DevApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
