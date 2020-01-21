import { TestBed } from '@angular/core/testing';

import { DriveserveiceService } from './driveserveice.service';

describe('DriveserveiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriveserveiceService = TestBed.get(DriveserveiceService);
    expect(service).toBeTruthy();
  });
});
