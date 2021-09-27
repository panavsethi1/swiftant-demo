import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  url: string =
    'https://api.themoviedb.org/4/list/1?page=1&api_key=701a3da3a78484e2e7156975295b8b02&sort_by=release_date.desc';

  getMovies(page: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/4/list/1?page=${page}&api_key=701a3da3a78484e2e7156975295b8b02&sort_by=release_date.desc`
    );
  }
}

// 701a3da3a78484e2e7156975295b8b02

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDFhM2RhM2E3ODQ4NGUyZTcxNTY5NzUyOTViOGIwMiIsInN1YiI6IjYxNDU5OWM2OWYwZTE5MDA2NDdiMDljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LJDt4yg5YwhdMIOfQHIRtFlU-OulvF1ZwWFH_du043w
