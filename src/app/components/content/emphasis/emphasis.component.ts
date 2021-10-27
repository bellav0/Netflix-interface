import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie} from 'src/app/utils';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'nf-emphasis',
  templateUrl: './emphasis.component.html',
  styleUrls: ['./emphasis.component.scss']
})
export class EmphasisComponent implements OnInit {

  @Input() movie: Movie;
  constructor(    private modal: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  openMovieDetails(): void{
    this.modal.open(MovieDetailsComponent, {
      disableClose: true,
       panelClass: 'nf-full-scroll-modal',
     // backdropClass: 'nf-full-scroll-modal',
      data: {
        movie: this.movie
      },
    });
  }
}
