import { Component, Input, OnInit } from '@angular/core';
import { MovieAbstract } from '../interface/imdb';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  cards!: MovieAbstract[];

}
