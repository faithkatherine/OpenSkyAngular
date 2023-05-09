import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';

import { SigninComponent } from './signin/signin.component';
import { FlightsComponent } from './flights/flights.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    FlightsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMatDatetimePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
