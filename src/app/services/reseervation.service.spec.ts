import { TestBed } from '@angular/core/testing';

import { ReseervationService } from './reseervation.service';

describe('ReseervationService', () => {
  let service: ReseervationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReseervationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
