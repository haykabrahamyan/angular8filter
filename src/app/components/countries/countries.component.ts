import { MainService } from '../../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  selected: string;
  countries: string[] = [];

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    const countries: string[] = JSON.parse(window.localStorage.getItem('countries'));
    if (countries && countries.length) {
      this.countries = countries;
    } else {
      this.mainService.getCountries().subscribe((res: string[]) => {
        this.countries = res;
        window.localStorage.setItem('countries', JSON.stringify(this.countries));
      }, () => {
        alert('something went wrong !!!');
      });
    }
  }

  checkIfThereIsCountry(country) {
    return this.countries.includes(country);
  }

  addToCountries(country) {
    this.countries.unshift(country);
    window.localStorage.setItem('countries', JSON.stringify(this.countries));
  }

}
