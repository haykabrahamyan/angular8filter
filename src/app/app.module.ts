import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountriesComponent } from './components/countries/countries.component';
import { ListComponent } from './components/list/list.component';
import { RequestService } from './services/request.service';
import { MainService } from './services/main.service';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TypeaheadModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    MainService,
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
