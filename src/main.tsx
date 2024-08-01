// Core
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

// Styles
import "./index.css";

// Typografy
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Appliation
import { App } from "./app/App.tsx";

// Utilities
import { theme } from "./app/utilities/theme.utility.ts";

// Providers
import { UserProvider } from "./app/contexts/user/user.context.tsx";
import { LoaderProvider } from "./app/contexts/loader/loader.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <LoaderProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </LoaderProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
