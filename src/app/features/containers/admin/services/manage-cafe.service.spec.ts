import { TestBed, inject } from '@angular/core/testing';

import { ManageCafeService } from './manage-cafe.service';

describe('ManageCafeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageCafeService]
    });
  });

  it('should be created', inject([ManageCafeService], (service: ManageCafeService) => {
    expect(service).toBeTruthy();
  }));
});
