import { TestBed } from '@angular/core/testing';

import { SavasService } from './savas.service';

describe('SavasService', () => {
  let service: SavasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
