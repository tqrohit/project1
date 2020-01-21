import { TestBed } from '@angular/core/testing';

import { UseParticalsService } from './use-particals.service';

describe('UseParticalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UseParticalsService = TestBed.get(UseParticalsService);
    expect(service).toBeTruthy();
  });
});
