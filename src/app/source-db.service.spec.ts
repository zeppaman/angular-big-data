import { TestBed, inject } from '@angular/core/testing';

import { SourceDBService } from './source-db.service';

describe('SourceDBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourceDBService]
    });
  });

  it('should be created', inject([SourceDBService], (service: SourceDBService) => {
    expect(service).toBeTruthy();
  }));
});
