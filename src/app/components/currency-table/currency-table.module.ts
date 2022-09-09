import {NgModule} from '@angular/core';
import {CurrencyTableComponent} from './currency-table.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CurrencyTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [CurrencyTableComponent]
})
export class CurrencyTableModule {
}
