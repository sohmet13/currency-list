import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, timer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {exhaustMap, map, takeUntil} from 'rxjs/operators';
import {CurrenciesData, Currency} from './currency-table.model';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  currencies: Currency[] = [];
  userMoney: number;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  ngOnInit() {
    timer(0, 10000).pipe(
      exhaustMap(() => this.getCurrencies$()),
      takeUntil(this.destroy$),
    ).subscribe(currencies => this.currencies = currencies);
  }

  onRefreshListButton(): void {
    this.getCurrencies$().subscribe(currencies => this.currencies = currencies);
  }

  getCurrencies$(): Observable<Currency[]> {
    return this.httpClient.get('https://www.cbr-xml-daily.ru/daily_json.js').pipe(
      takeUntil(this.destroy$),
      map(({Valute}: CurrenciesData) => Object.values(Valute)),
    );
  }

  currencyById(index: number, {ID}: Currency): string {
    return ID;
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
