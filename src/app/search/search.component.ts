import { Component, OnInit } from '@angular/core';
import { ApifilmService } from '../services/apifilm.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private apifilmService: ApifilmService) {}

  ngOnInit(): void {}

  filteredFilms: any = {};

  onInputSearch(inputValue: string) {
    if (inputValue) {
      this.getFilmSearch(inputValue);
    }
  }

  getFilmSearch(value: string) {
    this.apifilmService.getFilmSearch(value).subscribe((data) => {
      this.filteredFilms = data;
    });
  }
}
