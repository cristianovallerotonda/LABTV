import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApifilmService } from '../services/apifilm.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
})
export class FilmDetailComponent implements OnInit {
  sanitizer: any;

  constructor(
    private apifilmService: ApifilmService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {}

  idUrl: string = '';
  videoUrl: string = '';
  myIdFilm: string = '';

  ngOnInit(): void {
    this.myIdFilm = this.route.snapshot.params['id'];
    this.getFilmDetail(this.myIdFilm);
    this.getFilmTrailer(this.myIdFilm);
  }

  filmDetails: any = {};

  getFilmDetail(myIdFilm: string) {
    this.apifilmService.getFilmDetail(myIdFilm).subscribe((data) => {
      this.filmDetails = data;
    });
  }

  transform(url: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  filmTrailer: any = {};

  getFilmTrailer(myIdFilm: string) {
    this.apifilmService.getFilmTrailer(myIdFilm).subscribe((data) => {
      this.filmTrailer = data;

      this.idUrl = 'https://www.youtube.com/embed/' + this.filmTrailer.videoId;
    });
  }
}
