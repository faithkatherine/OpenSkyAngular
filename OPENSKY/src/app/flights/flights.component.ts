import { Component } from '@angular/core';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {

  constructor(private flightsService: FlightsService){}
  airPortsData!: {ICAO:string, name:string}[]
  ngOnInit(){
    this.getAirportsData();
  }

  getAirportsData(){
    this.flightsService.getAirports().subscribe((data:any) =>{
      this.airPortsData = data.map((airport:any) => {
        return { ICAO: airport.ident, name: airport.name};
      });

      console.log(this.airPortsData);
    });
  }

  getOpenSky(){

  }
}
