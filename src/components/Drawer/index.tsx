import AssignmentIcon from "@mui/icons-material/Assignment";
import MovingIcon from "@mui/icons-material/Moving";
import SchoolIcon from "@mui/icons-material/School";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { Outlet, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderComp from "../Header";
import React from "react";
import Alert from "../OneAlert";


const drawerWidth = 72;

export default function ResponsiveDrawer() {
  const { pathname } = useLocation();

  const styles = {
    drawerWidth: {
      width: 72,
      "&:hover": {
        width: "220!important",
      },
    },
    iconSize: {
      fontSize: "30px",
    },
    listItemButtonStyle: {
      "&:hover": {
        color: "white!important",
      },
      "&:hover .MuiListItemIcon-root": {
        color: "white!important",
      },
      "&.Mui-selected": {
        color: "white!important",
      },
      "& .MuiListItemIcon-root": {
        color: "gray!important",
      },
      "&.Mui-selected .MuiListItemIcon-root": {
        color: "white!important",
      },
      paddingBlock: "16px",
    },
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="h-full" style={styles.drawerWidth}>
      <Toolbar>
        <img src="../../assets/street suite logo-04.png" />
      </Toolbar>
      <List>
        <ListItemButton
          sx={styles.listItemButtonStyle}
          selected={pathname == "/"}>
          <ListItemIcon>
            <NotificationsIcon style={styles.iconSize} />
          </ListItemIcon>
          <ListItemText className="txt" primary="Alerts" />
        </ListItemButton>

        <ListItemButton
          sx={styles.listItemButtonStyle}
          selected={pathname == "/training"}>
          <ListItemIcon>
            <SchoolIcon style={styles.iconSize} />
          </ListItemIcon>
          <ListItemText style={styles.iconSize} primary="Training" />
        </ListItemButton>

        <ListItemButton
          sx={styles.listItemButtonStyle}
          selected={pathname == "automation"}>
          <ListItemIcon>
            <AssignmentIcon style={styles.iconSize} />
          </ListItemIcon>
          <ListItemText style={styles.iconSize} primary="Automation" />
        </ListItemButton>

        <ListItemButton
          sx={styles.listItemButtonStyle}
          selected={pathname == "/portfolio"}>
          <ListItemIcon>
            <SchoolIcon style={styles.iconSize} />
          </ListItemIcon>
          <ListItemText style={styles.iconSize} primary="Portfolio" />
        </ListItemButton>

        <ListItemButton
          sx={styles.listItemButtonStyle}
          selected={pathname == "/trading"}>
          <ListItemIcon>
            <MovingIcon style={styles.iconSize} />
          </ListItemIcon>
          <ListItemText style={styles.iconSize} primary="Trading" />
        </ListItemButton>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }} className="bg-gray-600 rounded-md">
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height: "5rem",
          backgroundColor: "transparent!important",
        }}>
        <HeaderComp />
        <Alert />
      </AppBar>
      <Box
        component="nav"
        style={styles.drawerWidth}
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              // width: drawerWidth,
            },
          }}
          style={styles.drawerWidth}
          PaperProps={{
            sx: {
              "::selection": {
                color: "white",
              },
              ":hover": { backgroundColor: "white" },
            },
          }}>
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          style={styles.drawerWidth}
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
          PaperProps={{
            sx: {
              backgroundColor: "black",
              color: "gray",
              "::selection": {
                color: "white",
              },
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
