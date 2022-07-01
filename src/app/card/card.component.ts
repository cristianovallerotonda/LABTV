import { Component, Input } from '@angular/core';
import { MovieAbstract } from '../interface/imdb';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  card!: MovieAbstract;
}
