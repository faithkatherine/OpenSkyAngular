import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private airportsUrl = 'assets/large_airports.json'
  constructor(private httpClient:HttpClient) { }

  getAirports(){
    return this.httpClient.get(this.airportsUrl);

  }
}
