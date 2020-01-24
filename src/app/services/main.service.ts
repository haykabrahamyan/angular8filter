import { RequestService } from './request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private requestService: RequestService) { }

  getCountries() {
    return this.requestService.get('assets/db/countries.json');
  }
}
