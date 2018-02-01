import { Component, OnInit } from '@angular/core';
import { CryptoCurrencyService } from './crypto-currency.service';
import { Observable } from 'rxjs/Observable';
import { Currency } from './currency.model';

@Component({
  selector: 'app-crypto-currency',
  templateUrl: './crypto-currency.component.html',
  styleUrls: ['./crypto-currency.component.scss']
})
export class CryptoCurrencyComponent implements OnInit {

  public convertToCurrency: Array<string> = [
    'AUD', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HUF',
    'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN',
    'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'USD', 'ZAR'
  ];

  public searchTxt: string;
  public convertTo = 'USD';
  public $currencyList: Observable<Currency[]>;
  constructor(private currencyService: CryptoCurrencyService) { }

  ngOnInit() {
    // commented because my request is blocked.
    // open api and not required any auth and license.
    // this.$currencyList = this.currencyService.fetchAllCurrencies();
  }

  public convertToCurrencyFn( event ): void {
    this.$currencyList = this.currencyService.fetchConvertedCurrencyRate(this.convertTo);
  }

}
