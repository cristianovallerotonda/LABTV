import { Component, OnInit } from '@angular/core';
import { ApifilmService } from '../services/apifilm.service';


@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
