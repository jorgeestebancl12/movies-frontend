// Core
import { Box } from "@mui/material";

// Sections
import { PopularSection } from "./sections/popular/popular.section";
import { UpcomingSection } from "./sections/upcoming/upcoming.section";
import { TopRatedSection } from "./sections/topRated/topRated.section";
import { FavoriteSection } from "./sections/favorite/favorite.section";
import { NowPlayingSection } from "./sections/nowPlaying/nowPlaying.section";

// Hooks
import useMediaQueries from "../../hooks/useMediaQuery";
import { HeaderSection } from "./sections/header/header.section";

export function HomeScreen() {
  const matches = useMediaQueries({
    isTabletOrMobile: "(max-width: 1220px)",
  });

  return (
    <>
      <HeaderSection />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "row",
        }}
      >
        <Box
          width={350}
          minWidth={350}
          display={matches.isTabletOrMobile ? "none" : "block"}
          sx={{
            overflowX: "auto",
            padding: "20px 20px 20px 20px",
          }}
        ></Box>
        <Box
          sx={{
            paddingTop: 5,
            width: `calc(100% - ${!matches.isTabletOrMobile ? 350 : 0}px)`,
            backgroundColor: "secondary.main",
          }}
        >
          <PopularSection />
          <NowPlayingSection />
          <UpcomingSection />
          <TopRatedSection />
          <FavoriteSection />
        </Box>
      </Box>
    </>
  );
}
