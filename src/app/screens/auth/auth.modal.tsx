// Properties
import { Box, Dialog, Typography, DialogContent } from "@mui/material";

// Properties
import { AuthProperties } from "./auth.properties";

// Images
import Person from "../../assets/person.svg";

// Hooks
import useMediaQueries from "../../hooks/useMediaQuery";
import { useState } from "react";
import { LoginSection } from "./sections/login.section";
import { RegisterSection } from "./sections/register.section";

export function AuthModal(properties: AuthProperties) {
  const [form, setForm] = useState<"login" | "register">("login");

  const matches = useMediaQueries({
    isTabletOrMobile: "(max-width: 1220px)",
  });

  return (
    <Dialog
      maxWidth="lg"
      open={properties.show}
      onClose={properties.handlerClose}
      PaperProps={{
        style: {
          backgroundColor: "#0000003D",
          backdropFilter: "blur(5px)",
        },
      }}
    >
      <DialogContent sx={{ padding: 1 }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: 500 }}>
            <div style={{}}>
              <button
                style={{ backgroundColor: "yellow", border: 0, padding: 10 }}
                onClick={() => setForm("register")}
              >
                <Typography>Sign up</Typography>
              </button>
              <button
                style={{ backgroundColor: "yellow", border: 0, padding: 10 }}
                onClick={() => setForm("login")}
              >
                <Typography>Login</Typography>
              </button>
            </div>
            {form === "login" ? <LoginSection /> : <RegisterSection />}
          </Box>
          <Box
            sx={{
              width: 500,
              borderRadius: 2,
              alignItems: "center",
              flexDirection: "column",
              padding: "20px 20px 0px 20px",
              backgroundColor: "common.black",
              display: matches.isTabletOrMobile ? "none" : "flex",
            }}
          >
            <Typography variant="h4" textAlign="center">
              Welcome to Inlaze Movies!
            </Typography>
            <Typography textAlign="center">
              🎬 Ready to unlock a universe of cinematic delights? Sign up now
              and start your journey with us!
            </Typography>
            <img src={Person} alt="person" width={350} />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
