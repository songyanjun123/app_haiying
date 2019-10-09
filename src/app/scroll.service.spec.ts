import { TestBed } from '@angular/core/testing';

import { ScrollServiceService } from './scroll.service';

describe('ScrollServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollServiceService = TestBed.get(ScrollServiceService);
    expect(service).toBeTruthy();
  });
});
