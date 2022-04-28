import NextLink from "next/link";
import { Box, TextField, Button, Typography } from "@mui/material";
export const Login = () => {
  return (
    <Box>
      <TextField placeholder="Enter username or email" />
      <TextField placeholder="Enter password" />
      <Button>Login</Button>
      <Box>
        <Typography>Forget you password?</Typography>
        <Typography>
          <NextLink href="/authentication/signup">
            Don't have an account?
          </NextLink>
        </Typography>
      </Box>
    </Box>
  );
};
