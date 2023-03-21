import { TestBed } from '@angular/core/testing';

import { ProdctosService } from './prodctos.service';

describe('ProdctosService', () => {
  let service: ProdctosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdctosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
