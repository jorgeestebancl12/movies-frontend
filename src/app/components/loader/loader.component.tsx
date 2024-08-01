// Properties
import { useContext } from "react";

// Components
import { Box, CircularProgress } from "@mui/material";

// Context
import { LoaderContext } from "../../contexts/loader/loader.context";

// Properties
import { LoaderProperties } from "./loader.properties";

export function LoaderComponent(properties: LoaderProperties) {
  const { loading } = useContext(LoaderContext);

  if (loading || properties.show) {
    return (
      <Box
        top={0}
        left={0}
        right={0}
        width="100%"
        height="100%"
        zIndex={99999}
        display="flex"
        position="fixed"
        alignItems="center"
        justifyContent="center"
        sx={{
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(0,0,0,.5)",
        }}
      >
        <CircularProgress size={70} />
      </Box>
    );
  } else return null;
}
