import { TestBed, inject } from '@angular/core/testing';

import { AccplanService } from './accplan.service';

describe('AccplanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccplanService]
    });
  });

  it('should be created', inject([AccplanService], (service: AccplanService) => {
    expect(service).toBeTruthy();
  }));
});
