import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { useNavigate } from "react-router-dom";

const drawerWidth = 200;

export default function SideBar() {
  const nav = useNavigate();
  const list = [
    { name: "Home", path: "/", Icon: HomeOutlinedIcon },
    { name: "List Users", path: "/users", Icon: GroupOutlinedIcon },
    {
      name: "Create User",
      path: "/createuser",
      Icon: PersonAddAltOutlinedIcon,
    },
    { name: "Profile", path: "/profile", Icon: AccountCircleOutlinedIcon },
  ];

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {list.map(({ name, Icon, path }, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => nav(path)}>
                  <ListItemIcon>
                    <Icon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
}
