import { Box, Typography } from "@mui/material";
import { Login as LoginForm } from "../../components/authentication/login";

export default function Login() {
  return (
    <Box>
      <Typography>Login</Typography>
      <LoginForm />
    </Box>
  );
}
