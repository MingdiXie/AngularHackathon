import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { TradeComponent } from './trade/trade.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component'

@NgModule({
  declarations: [
    AppComponent,
    TradeComponent,
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
