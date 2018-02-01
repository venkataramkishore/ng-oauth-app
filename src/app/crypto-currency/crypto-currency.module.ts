import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoCurrencyRoutingModule } from './crypto-currency-routing.module';
import { CryptoCurrencyComponent } from './crypto-currency.component';
import { CryptoCurrencyService } from './crypto-currency.service';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CryptoCurrencyRoutingModule
  ],
  providers: [
    CryptoCurrencyService
  ],
  declarations: [
    CryptoCurrencyComponent,
    CurrencyDetailsComponent
  ]
})
export class CryptoCurrencyModule { }
