import { Box } from "@mui/material";

export function LoginSection() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "30px 50px 30px 50px",
      }}
    >
      <input style={{ height: 35, marginBottom: 10 }} />
      <input style={{ height: 35 }} />
    </Box>
  );
}
