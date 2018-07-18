import { TestBed, inject } from '@angular/core/testing';

import { LokiTestService } from './loki.service';

describe('LokiTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LokiService]
    });
  });

  it('should be created', inject([LokiTestService], (service: LokiTestService) => {
    expect(service).toBeTruthy();
  }));
});
