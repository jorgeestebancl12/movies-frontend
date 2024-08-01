// Core
import {
  Box,
  Card,
  CardMedia,
  IconButton,
  Typography,
  CardContent,
} from "@mui/material";
import { Favorite, Bookmark } from "@mui/icons-material";

// Properties
import { MovieProperties } from "./movie.properties";
import { ScoreComponent } from "../score/score.component";
import { useNavigate } from "react-router-dom";

export function MovieComponent(properties: MovieProperties) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: 200,
        minWidth: 200,
        borderRadius: 3,
        backgroundColor: "common.black",
      }}
    >
      <CardMedia
        height="223"
        component="img"
        alt={properties.title}
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/movies/${properties.id}`)}
        src={`https://media.themoviedb.org/t/p/w440_and_h660_face${properties.image}`}
      />
      <CardContent>
        <Typography variant="body1" noWrap>
          {properties.title}
        </Typography>
        <Typography variant="caption" noWrap>
          {properties.date}
        </Typography>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="caption">Rating</Typography>
            <ScoreComponent size={25} percentage={properties.rating} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="caption">Favorites</Typography>
            <IconButton style={{ padding: 0 }}>
              <Favorite htmlColor="#fff" />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="caption">Save</Typography>
            <IconButton style={{ padding: 0 }}>
              <Bookmark htmlColor="#fff" />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
