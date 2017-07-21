import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GeocachingService } from '../geocaching.service';

@Component({
  selector: 'app-geo-form',
  templateUrl: './geo-form.component.html',
  styleUrls: ['./geo-form.component.css'],
  providers: [ GeocachingService ]
})
export class GeoFormComponent {
  result: any = null;
  search: string = null;

  constructor(private geocaching: GeocachingService) { }

    getLocation(address: string): void {
      this.geocaching.getLocation(address).subscribe(response => {
        this.search = `address: ${address}`;
        this.result = response.json().results[0].geometry.location;
      });
    }
}
