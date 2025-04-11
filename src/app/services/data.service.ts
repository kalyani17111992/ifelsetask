import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://01.fy25ey01.64mb.io/';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);
  }

}