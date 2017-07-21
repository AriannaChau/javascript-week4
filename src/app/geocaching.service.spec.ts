import { TestBed, inject } from '@angular/core/testing';

import { GeocachingService } from './geocaching.service';

describe('GeocachingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocachingService]
    });
  });

  it('should ...', inject([GeocachingService], (service: GeocachingService) => {
    expect(service).toBeTruthy();
  }));
});
