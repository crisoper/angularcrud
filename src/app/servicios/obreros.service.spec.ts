import { TestBed } from '@angular/core/testing';

import { ObrerosService } from './obreros.service';

describe('ObrerosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObrerosService = TestBed.get(ObrerosService);
    expect(service).toBeTruthy();
  });
});
