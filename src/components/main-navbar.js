import { Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import NextLink from "next/link";
const NavBarLink = styled("div")(({ theme }) => ({
  marginLeft: "20px",
  borderRadius: 10,
  cursor: "pointer",
}));

export const MainNavbar = ({ openSideBar }) => {
  return (
    <AppBar
      sx={{
        p: 2,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography>LOGO</Typography>
        </Box>
        <Box
          sx={{
            display: {
              md: "flex",
              xs: "none",
            },
          }}
        >
          <NextLink href="/authentication/login">
            <NavBarLink>
              <Typography>Login</Typography>
            </NavBarLink>
          </NextLink>
          <NextLink href="/authentication/signup">
            <NavBarLink>
              <Typography>SignUp</Typography>
            </NavBarLink>
          </NextLink>
        </Box>
        <IconButton
          onClick={() => openSideBar()}
          sx={{
            display: {
              md: "none",
            },
          }}
        >
          <Menu />
        </IconButton>
      </Container>
    </AppBar>
  );
};
