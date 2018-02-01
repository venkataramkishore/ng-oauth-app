import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoCurrencyComponent } from './crypto-currency.component';
import { CurrencyDetailsComponent } from './currency-details/currency-details.component';

const routes: Routes = [
  {
    path: 'cryptocurrency',
    component: CryptoCurrencyComponent
  },
  {
    path: 'cryptocurrency/:ccyID',
    component: CurrencyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoCurrencyRoutingModule { }
