import { TestBed } from '@angular/core/testing';

import { HolamService } from './holam.service';

describe('HolamService', () => {
  let service: HolamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
