import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  readonly _baseUrl = 'https://santander-dev.herokuapp.com/bootcamp';

  constructor(private _http: HttpClient) {}

  async getStocks(): Promise<Stock[]> {
    return this._http.get<Stock[]>(`${this._baseUrl}/stock`).toPromise();
  }
}
