import { TestBed } from '@angular/core/testing';

import { StatestiqueService } from './statistique.service';

describe('StatestiqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatestiqueService = TestBed.get(StatestiqueService);
    expect(service).toBeTruthy();
  });
});
