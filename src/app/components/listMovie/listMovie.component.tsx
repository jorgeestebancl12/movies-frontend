// Core
import { Box, Divider, Skeleton, Typography } from "@mui/material";

// Properties
import { ListMovieProperties } from "./listMovie.properties";

// Components
import { MovieComponent } from "../movie/movie.component";

export function ListMovieComponent(properites: ListMovieProperties) {
  return (
    <Box
      sx={{
        width: "100%",
        marginBottom: 3,
        position: "relative",
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{ marginLeft: 2, marginBottom: 1 }}
      >
        {properites.title}
      </Typography>
      <Box
        sx={{
          gap: 2,
          display: "flex",
          scrollbarWidth: "none",
          overflowX: properites.loading ? "hidden" : "auto",
        }}
      >
        <Divider />
        {properites.loading ? (
          <>
            {Array.from({ length: 20 }).map((_, index) => (
              <Skeleton
                key={index}
                height={330}
                variant="rectangular"
                sx={{ borderRadius: 2, minWidth: 200 }}
              />
            ))}
          </>
        ) : (
          <>
            {properites.movies.map((item, index) => (
              <MovieComponent
                key={index}
                save={false}
                id={item.id}
                favorite={false}
                date={item.date}
                image={item.path}
                rating={item.rate}
                title={item.title}
              />
            ))}
          </>
        )}
        <Divider />
      </Box>
    </Box>
  );
}
