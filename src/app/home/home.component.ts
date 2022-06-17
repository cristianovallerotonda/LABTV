import { Component, OnInit } from '@angular/core';
import { ApifilmService } from '../services/apifilm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private apifilmService: ApifilmService) {}

  ngOnInit(): void {
    this.getApiFilm();
  }

  api: any = {};

  getApiFilm() {
    this.apifilmService.getApiFilm().subscribe(
      (data: any) => {
        this.api = data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
