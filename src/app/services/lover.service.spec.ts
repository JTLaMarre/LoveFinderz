import { TestBed } from '@angular/core/testing';

import { LoverService } from './lover.service';

describe('LoverService', () => {
  let service: LoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
