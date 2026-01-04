import { TestBed } from '@angular/core/testing';

import { FruitsService } from './fruits';

describe('Fruits', () => {
  let service: FruitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
