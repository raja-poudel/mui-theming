import { Box, Typography } from "@mui/material";
import { SignUp as SignUpForm } from "../../components/authentication/signup";
export default function SignUp() {
  return (
    <Box>
      <Typography>Sign Up</Typography>
      <SignUpForm />
    </Box>
  );
}
