import { Mail, MailOutline, Notifications, Pets } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography, styled } from "@mui/material";
import React from "react";

const StyleToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 20,
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyleToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block",cursor:'pointer' } }}>
          ORDA
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search sx={{display:{xs:'none',sm:'block'}}}>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error" sx={{cursor:'pointer',":hover": {opacity:0.8}}}>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error" sx={{cursor:'pointer',":hover": {opacity:0.8}}}>
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30  , cursor:'pointer', ":hover": {opacity:0.8}}} src="https://avatars.githubusercontent.com/u/73281960?v=4"  />
        </Icons>
      </StyleToolBar>
    </AppBar>
  );
};

export default Navbar;
