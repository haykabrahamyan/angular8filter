import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private httpOptions = {};

  constructor(private http: HttpClient) { }

  get(url: string) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      })
    };
    return this.http.get(url, this.httpOptions);
  }

}