import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getStates(): Observable<any> {
    return this.http.get(
      'https://cdn-api.co-vin.in/api/v2/admin/location/states'
    );
  }

  getDistricts(id: number): Observable<any> {
    return this.http.get(
      `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
    );
  }
}
