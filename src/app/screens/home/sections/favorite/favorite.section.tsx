// Core
import { useEffect, useState } from "react";

// Components
import { ListMovie } from "../../../../components";

// Services
import { Favorite as Service } from "../../../../api";

// Types
import { ResultMoviesService } from "../../../../types/movies.type";

// Utilities
import { getPercentageMovieRatingUtility } from "../../../../utilities/movie.utility";

export function FavoriteSection() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<ResultMoviesService[]>([]);

  useEffect(() => {
    setLoading(true);
    Service.get(20, 1)
      .then((success) => {
        setMovies(
          success.data.results.map((i: any) => ({
            title: i.original_title,
            date: i.release_date,
            path: i.poster_path,
            backdrop_path: i.backdrop_path,
            overview: i.overview,
            id: i.id,
            rate: getPercentageMovieRatingUtility(i.vote_average),
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return <ListMovie loading={loading} title="Favorite" movies={movies} />;
}
