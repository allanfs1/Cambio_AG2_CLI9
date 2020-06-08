import { TestBed } from '@angular/core/testing';

import { CambioCtService } from './cambio-ct.service';

describe('CambioCtService', () => {
  let service: CambioCtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambioCtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
