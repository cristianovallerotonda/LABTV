import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApifilmService {
  constructor(private http: HttpClient) {}

  wsApiFilm = 'https://imdb-api.com/en/API/MostPopularMovies/k_pfx1xif6';
  wsFilmDetail = 'https://imdb-api.com/it/API/Title/k_pfx1xif6/';

  getApiFilm(): Observable<any> {
    return this.http.get(this.wsApiFilm);
  }

  getFilmDetail(request: string): Observable<any> {
    return this.http.get(this.wsFilmDetail + request);
  }
}

//https://imdb-api.com/en/API/MostPopularMovies/k_mtl1ukx1
// k_pfx1xif6
