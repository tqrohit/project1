import { TestBed } from '@angular/core/testing';

import { CallApisService } from './call-apis.service';

describe('CallApisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallApisService = TestBed.get(CallApisService);
    expect(service).toBeTruthy();
  });
});
