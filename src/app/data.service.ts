import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<any> {
    return this.http.get('/doughnut.json');
  }
  getVerticalBarData(): Observable<any> {
    return this.http.get('/verticalbar.json');
  }
}
