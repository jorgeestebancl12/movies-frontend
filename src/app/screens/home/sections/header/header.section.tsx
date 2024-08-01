// Core
import { Box, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";

// Constants
import { FilterMovieConstants } from "../../../../constants/filter.movies.constants";

// Services
import { Movie as Service } from "../../../../api";

// Types
import { ResultMoviesService } from "../../../../types/movies.type";

// Utilities
import { getPercentageMovieRatingUtility } from "../../../../utilities/movie.utility";

// Components
import { Score } from "../../../../components";

export function HeaderSection() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<ResultMoviesService[]>([]);

  useEffect(() => {
    setLoading(true);
    Service.getMovies({
      page: 1,
      section: FilterMovieConstants.upcoming,
    })
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

  if (loading) {
    return <Skeleton variant="rectangular" width="100%" height={436} />;
  }

  return (
    <Carousel interval={5000} indicators={false} height={436}>
      {movies.map((item, index) => (
        <Box
          key={index}
          sx={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            sx={{
              alignItems: "flex-end",
              display: "flex",
              height: "100%",
              width: "100%",
              background:
                "linear-gradient(0.87deg, #000000 19.5%, rgba(102, 102, 102, 0) 99.2%)",
            }}
          >
            <Box
              sx={{
                padding: 5,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ maxWidth: "70%" }}>
                <Typography variant="h4" mb={2}>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.overview}</Typography>
              </Box>
              <Box sx={{ width: 150 }}>
                <Score percentage={item.rate} size={90} />
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
}
