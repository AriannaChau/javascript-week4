import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys'

@Injectable()
export class GeocachingService {
  geo = `https://maps.googleapis.com/maps/api/geocode/json?key=${geoKey}`;
  constructor(private http: Http) { }

  getLocation(address: string): Observable<any> {
    const url = `${this.geo}&address=${address}`;
    return this.http.get(url);
  }

  getPhysicalAddress(lat: string, lng: string): Observable<any> {
  const url = `${this.geo}&latlng=${lat},${lng}`;
  return this.http.get(url);
  }
}
