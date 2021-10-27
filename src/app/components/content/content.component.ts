import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/utils';

@Component({
  selector: 'nf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [MoviesService],
})
export class ContentComponent implements OnInit {
  movies: Movie[];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovie()
  }

 private  async getMovie(): Promise<any> {
    this.movies = await this.moviesService.getMoviesList();
    console.log(this.movies)
  }
}
