import { ResultMoviesService } from "../../types/movies.type";

export interface ListMovieProperties {
  movies: ResultMoviesService[];
  loading: boolean;
  title: string;
}
