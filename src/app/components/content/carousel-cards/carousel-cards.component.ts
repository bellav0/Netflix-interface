import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Movie, options } from 'src/app/utils';

@Component({
  selector: 'nf-carousel-cards',
  templateUrl: './carousel-cards.component.html',
  styleUrls: ['./carousel-cards.component.scss']
})
export class CarouselCardsComponent implements OnInit {
  customOptions: OwlOptions = options;
  @Input() movies: Movie[];
  constructor() { }

  ngOnInit(): void {
  }

}
