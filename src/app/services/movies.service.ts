import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiKey, token } from '../config';
import { Movie, Response, Video } from '../utils';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MoviesService {
  movies = new BehaviorSubject(null);
  constructor(private http: HttpClient) {}

  private getHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers
      .set('Authorization', `Basic ${token}`)
      .set('Content-Type', 'application/json; charset=utf-8');
    return headers;
  }

  getMoviesList(): Promise<Movie[]> {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=10`,
        {
          headers: this.getHeader(),
        }
      )
      .toPromise()
      .then(async (res: Response) => {
        if (res) {
          for (const movie of res.results) {
            movie.image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            movie.imageEmphasys =  `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
          
          }
          return res.results;
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  getTrailers(movieId: number) {
    return this.http
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=pt-BR`,
        {
          headers: this.getHeader(),
        }
      )
      .toPromise()
      .then((res) => {
        if (res) {
          console.log(res);
          return res;
        }
      });
  }
}
