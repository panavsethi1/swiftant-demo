import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  mapForm = this.fb.group({
    lat1: 0,
    lat2: 0,
    lat3: 0,
    lat4: 0,
    lng1: 0,
    lng2: 0,
    lng3: 0,
    lng4: 0,
  });

  apiLoaded: Observable<boolean>;
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 3;

  vertices: google.maps.LatLngLiteral[] = [
    { lat: 13, lng: 13 },
    { lat: -13, lng: 0 },
    { lat: 13, lng: -13 },
    { lat: -13, lng: 13 },
  ];

  constructor(httpClient: HttpClient, private fb: FormBuilder) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyAOXpmz2MMjM41oRkcTRqTW1bG7N3ACnSE',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  handleFormSubmit() {
    console.log(this.mapForm.controls.lat1.value);
    if (this.mapForm.controls.lat1.value) {
      this.vertices = [
        {
          lat: Number(this.mapForm.controls.lat1.value),
          lng: Number(this.mapForm.controls.lng1.value),
        },
        {
          lat: Number(this.mapForm.controls.lat2.value),
          lng: Number(this.mapForm.controls.lng2.value),
        },
        {
          lat: Number(this.mapForm.controls.lat3.value),
          lng: Number(this.mapForm.controls.lng3.value),
        },
        {
          lat: Number(this.mapForm.controls.lat4.value),
          lng: Number(this.mapForm.controls.lng4.value),
        },
      ];
    }
  }

  ngOnInit(): void {}
}
