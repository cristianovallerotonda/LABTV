import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApifilmService {
  constructor(private http: HttpClient) {}

  wsApiFilm = 'https://imdb-api.com/it/API/MostPopularMovies/k_pfx1xif6';
  wsFilmDetail = 'https://imdb-api.com/it/API/Title/k_pfx1xif6/';
  wsFilmTrailer = 'https://imdb-api.com/en/API/YouTubeTrailer/k_pfx1xif6/';
  wsSearchFilm = 'https://imdb-api.com/en/API/Search/k_pfx1xif6/';

  getApiFilm(): Observable<any> {
    return this.http.get(this.wsApiFilm);
  }

  getFilmDetail(request: string): Observable<any> {
    return this.http.get(this.wsFilmDetail + request);
  }

  getFilmTrailer(request: string): Observable<any> {
    return this.http.get(this.wsFilmTrailer + request);
  }

  getFilmSearch(param: string): Observable<any> {
    return this.http.get(this.wsSearchFilm + param);
  }
}

//https://imdb-api.com/en/API/MostPopularMovies/k_mtl1ukx1
// k_pfx1xif6
// k_0a9so352
// k_5kqh9fye
