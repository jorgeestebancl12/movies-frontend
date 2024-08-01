// Components
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";

// Assets
import Logo from "../../assets/Logo.svg";

// Icons
import { Logout, LightMode } from "@mui/icons-material";

// Properties
import { LayoutProperties } from "./layout.properties";

// Hooks
import useMediaQueries from "../../hooks/useMediaQuery";
import { useContext } from "react";
import { UserContext } from "../../contexts/user/user.context";

// Define the pages in the top menu
const pages = [
  "Popular",
  "Now Playing",
  "Upcoming",
  "Top Rated",
  "Favorites",
  "Saved",
];

export function LayoutScreen(properties: LayoutProperties) {
  const matches = useMediaQueries({
    isTabletOrMobile: "(max-width: 1220px)",
  });

  const { auth, logout, set_modal } = useContext(UserContext);

  const handlerLoginClick = () => {
    if (auth.token) {
      logout();
    } else {
      set_modal(true);
    }
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box marginRight={5}>
              <img src={Logo} alt="logo" />
            </Box>
            <Box
              sx={{
                gap: 5,
                flex: 1,
                display: matches.isTabletOrMobile ? "none" : "flex",
              }}
            >
              {pages.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 3 }}>
            <IconButton color="inherit">
              <LightMode />
            </IconButton>
            <IconButton color="inherit" onClick={handlerLoginClick}>
              <Logout />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: "64px", position: "relative" }}>
        {properties.children}
      </Box>
    </>
  );
}
