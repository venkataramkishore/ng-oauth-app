import { TestBed, inject } from '@angular/core/testing';

import { CryptoCurrencyService } from './crypto-currency.service';

describe('CryptoCurrencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoCurrencyService]
    });
  });

  it('should be created', inject([CryptoCurrencyService], (service: CryptoCurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
