import { TestBed } from '@angular/core/testing';

import { GetLinkService } from './get-link.service';

describe('GetLinkService', () => {
  let service: GetLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
