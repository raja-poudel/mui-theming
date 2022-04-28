import { Box, Typography } from "@mui/material";

export const Banner = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        background: "background.paper",
        boxShadow: 2,
        padding: 2
      }}
    >
      <Typography variant="h3">Welcome To Our App</Typography>
    </Box>
  );
};
