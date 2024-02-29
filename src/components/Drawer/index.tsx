import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AlertIcon from "/alert.svg";
import AutomationIcon from "/automation.svg";
import Portfolio from "/portfolio.svg";
import LogoIcon from "/street suite logo-04.png";
import Trading from "/trading.svg";
import Training from "/training.svg";

const drawerWidth = 65;

export default function ResponsiveDrawer() {
  const { pathname } = useLocation();

  const styles = {
    drawerWidth: {
      width: drawerWidth,
      "&:hover": {
        width: "220! important",
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
      <Toolbar></Toolbar>
      <img src={LogoIcon} />

      <List sx={{ alignItems: "center", justifyContent: "center" }}>
        <ListItemButton
          sx={styles.listItemButtonStyle}
          selected={pathname == "/"}
        >
          <ListItemIcon>
            <img src={AlertIcon} />
          </ListItemIcon>
          <ListItemText className="txt" primary="Alerts" />
        </ListItemButton>

        <ListItemButton
          sx={styles.listItemButtonStyle}
          selected={pathname == "/training"}
        >
          <ListItemIcon>
            <img src={Training} />
          </ListItemIcon>
          <ListItemText style={styles.iconSize} primary="Training" />
        </ListItemButton>

        <ListItemButton
          sx={styles.listItemButtonStyle}
          selected={pathname == "automation"}
        >
          <ListItemIcon>
            <img src={AutomationIcon} />
          </ListItemIcon>
          <ListItemText style={styles.iconSize} primary="Automation" />
        </ListItemButton>

        <ListItemButton
          sx={styles.listItemButtonStyle}
          selected={pathname == "/portfolio"}
        >
          <ListItemIcon>
            <img src={Portfolio} />
          </ListItemIcon>
          <ListItemText style={styles.iconSize} primary="Portfolio" />
        </ListItemButton>

        <ListItemButton
          sx={styles.listItemButtonStyle}
          selected={pathname == "/trading"}
        >
          <ListItemIcon>
            <img src={Trading} />
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
        }}
      >
        {/* <AlertPage /> */}
      </AppBar>
      <Box
        component="nav"
        style={styles.drawerWidth}
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
          }}
        >
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
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
