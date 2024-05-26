import { AccountBox, DarkMode, Description, FileOpen, Group, Home, MoodOutlined, Person, Settings, Store } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} height={"100vh"} sx={{ display: { xs: "none", sm: "block", position:'sticky'} }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#pages">
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary="Pages"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#groups">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#marketplace">
            <ListItemIcon>
              <Store />
            </ListItemIcon>
            <ListItemText primary="Marketplace"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#friends">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#profile">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#simple-list">
            <ListItemIcon>
              <DarkMode />
            </ListItemIcon>
            <Switch onClick={(e) => setMode(mode==="light"?"dark":"light")} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
