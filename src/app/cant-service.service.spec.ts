import { TestBed } from '@angular/core/testing';

import { CantServiceService } from './cant-service.service';

describe('CantServiceService', () => {
  let service: CantServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
