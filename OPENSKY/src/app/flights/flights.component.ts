import { Component } from '@angular/core';
import { FlightsService } from '../services/flights.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {

  constructor(private flightsService: FlightsService, private fb: FormBuilder){
    this.createForm()
  }
  myForm!: FormGroup;
  airPortsData!: {ICAO:string, name:string}[]
  ngOnInit(){
    this.getAirportsData();
  }
  createForm(){
    this.myForm = this.fb.group({
      selectedAirport:
    })
  }
  getAirportsData(){
    this.flightsService.getAirports().subscribe((data:any) =>{
      this.airPortsData = data.map((airport:any) => {
        return { ICAO: airport.ident, name: airport.name};
      });

      console.log(this.airPortsData);
    });
  }

  submitForm(){

  }
}
