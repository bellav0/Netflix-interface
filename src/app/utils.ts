export interface Movie {
  poster_path?: string;
  adult: boolean;
  release_date: string;
  overview: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  image?: string;
  imageEmphasys?: string;
  trailer?: string;
}

export interface Response {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}

export interface Video {
  id: number;
  results: Result[];
}

export interface Result {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export const options = {
  loop: true,
  autoplay: false,
  center: true,
  dots: false,
  autoHeight: true,
  autoWidth: true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: true,
};
