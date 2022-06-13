import { TestBed } from '@angular/core/testing';

import { ApifilmService } from './apifilm.service';

describe('ApifilmService', () => {
  let service: ApifilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApifilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
