import { Drawer, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainSidebarLink = styled("Link")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "block",
  padding: theme.spacing(1.5),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
export const MainSideBar = ({ open, onClose }) => {
  console.log(open);
  if (!open) {
    onClose();
    return;
  }
  return (
    <Drawer
      anchor="right"
      open={open}
      PaperProps={{ sx: { width: 256 } }}
      onClose={onClose}
      sx={{
        background: "background.default",
      }}
    >
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography
          sx={{
            my: 2,
          }}
        >
          Logo
        </Typography>
        <MainSidebarLink>Login</MainSidebarLink>
        <MainSidebarLink>Sign Up</MainSidebarLink>
      </Box>
    </Drawer>
  );
};
