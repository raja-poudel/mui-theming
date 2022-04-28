import NextLink from "next/link";
import { Box, TextField, Button, Typography } from "@mui/material";

export const SignUp = () => {
  return (
    <Box>
      <TextField placeholder="Enter username" />
      <TextField placeholder="Enter email" />
      <TextField placeholder="Enter password" />
      <TextField placeholder="Confirm password" />
      <Button>SignUp</Button>
      <Box>
        <Typography>
          <NextLink href="/authentication/login">
            Already have an account?
          </NextLink>
        </Typography>
      </Box>
    </Box>
  );
};
