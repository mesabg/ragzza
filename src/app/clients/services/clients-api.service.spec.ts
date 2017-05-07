import { TestBed, inject } from '@angular/core/testing';

import { ClientsApiService } from './clients-api.service';

describe('ClientsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsApiService]
    });
  });

  it('should ...', inject([ClientsApiService], (service: ClientsApiService) => {
    expect(service).toBeTruthy();
  }));
});
