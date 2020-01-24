import { MainService } from '../../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

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

  remove(i) {
    this.countries.splice(i, 1);
    window.localStorage.setItem('countries', JSON.stringify(this.countries));
  }

}
