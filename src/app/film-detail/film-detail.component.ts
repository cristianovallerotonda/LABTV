import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApifilmService } from '../services/apifilm.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
})
export class FilmDetailComponent implements OnInit {
  constructor(
    private apifilmService: ApifilmService,
    private route: ActivatedRoute
  ) {}

  myIdFilm: string = '';

  ngOnInit(): void {
    this.myIdFilm = this.route.snapshot.params['id'];
    this.getFilmDetail(this.myIdFilm);
  }

  filmDetails: any = {};

  getFilmDetail(myIdFilm: string) {
    this.apifilmService.getFilmDetail(myIdFilm).subscribe(
      (data) => {
        console.log(data);
        this.filmDetails = data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
