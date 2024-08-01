import Api, { URI } from "./api";
import { FilterMovieConstants } from "../constants/filter.movies.constants";

function getMovies(properties: {
  page: number;
  search?: string;
  section: FilterMovieConstants;
}) {
  return Api.get(URI.movie.get, {}, properties, {}, false);
}

function getMovie(id: string) {
  return Api.get(URI.movie.getOne, { id }, {}, {}, false);
}

function getRecommendations(id: string) {
  return Api.get(URI.movie.getRecommendation, { id }, {}, {}, false);
}

export default { getMovie, getMovies, getRecommendations };
