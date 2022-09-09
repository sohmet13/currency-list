import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CurrencyTableModule} from './components';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CurrencyTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
