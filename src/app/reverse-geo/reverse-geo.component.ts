import { Component, OnInit } from '@angular/core';
import { GeocachingService } from './../geocaching.service';

@Component({
  selector: 'app-reverse-geo',
  templateUrl: './reverse-geo.component.html',
  styleUrls: ['./reverse-geo.component.css'],
  providers: [ GeocachingService ]
})
export class ReverseGeoComponent {
  result: string = null;
  search: string = null;

  constructor(private geocaching: GeocachingService) { }

  getPhysicalAddress(lat: string, lng: string): void {
    this.geocaching.getPhysicalAddress(lat, lng).subscribe(response => {
      this.search = `lat: ${lat}, long: ${lng}`;
      this.result = response.json().results[0].formatted_address;
    });
  }
}
