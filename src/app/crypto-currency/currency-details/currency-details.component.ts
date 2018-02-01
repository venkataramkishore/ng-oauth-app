import { Component, OnInit } from '@angular/core';
import { CryptoCurrencyService } from '../crypto-currency.service';
import { Currency } from '../currency.model';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent implements OnInit {

  private ccyId: string;

  constructor(
    private currencyService: CryptoCurrencyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public currency: Currency;
  public convertTo: string;

  ngOnInit() {
    this.ccyId = this.route.snapshot.paramMap.get('ccyID');
    this.currencyService.fetchSpecificCurrency(this.ccyId, this.convertTo)
    .subscribe( (ccy: Currency[]) => {
      this.currency = new Currency(ccy[0]);
      console.log(this.currency);
    });
  }

  public backToCurrencyList(): void {
    this.router.navigate(['/cryptocurrency']);
  }
}
