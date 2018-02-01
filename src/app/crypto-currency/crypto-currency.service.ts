import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Currency } from './currency.model';

@Injectable()
export class CryptoCurrencyService {

  private baseUrl = 'https://api.coinmarketcap.com/v1/ticker/';

  constructor(private httpClient: HttpClient) { }

  public fetchAllCurrencies(): Observable<Currency[]> {
    console.log('inside fetchAll Currencies');
    return this.httpClient.get<Currency[]>(`${this.baseUrl}`);
  }

  public fetchConvertedCurrencyRate(convertTo: string): Observable<Currency[]> {
    return this.httpClient.get<Currency[]>(`${this.baseUrl}?convert=${convertTo}`);
  }

  public fetchSpecificCurrency(currency: string, convertTo: string): Observable<Currency[]> {
    return this.httpClient.get<Currency[]>(`${this.baseUrl}${currency}/?convert=${convertTo}`);
  }

}
