import { TestBed } from '@angular/core/testing';

import { Fruits } from './fruits';

describe('Fruits', () => {
  let service: Fruits;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fruits);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
