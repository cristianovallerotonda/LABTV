import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApifilmService {
  constructor(private http: HttpClient) {}

  wsApiFilm = 'https://imdb-api.com/it/API/MostPopularMovies/k_0a9so352';
  wsFilmDetail = 'https://imdb-api.com/it/API/Title/k_0a9so352/';
  wsFilmTrailer = 'https://imdb-api.com/en/API/YouTubeTrailer/k_0a9so352/';
  wsSearchFilm = 'https://imdb-api.com/en/API/Search/k_0a9so352/';

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
