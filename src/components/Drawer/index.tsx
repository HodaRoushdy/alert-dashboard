import { ListItem, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ComingSoon from "../coming-soon/coming.soon";
import AlertIconHovered from "/alert.hovered.svg";
import AlertIcon from "/alert.svg";
import AutomationIcon from "/automation.svg";
import Portfolio from "/portfolio.svg";
import Profile from "/profile.svg";
import LogoIcon from "/street suite logo-04.svg";
import Trading from "/trading.svg";
import TrainingHovered from "/training.hovered.svg";
import Training from "/training.svg";

export default function ResponsiveDrawer() {
  const { pathname } = useLocation();
  const expandedDrawerWidth = 200;
  const collapsedDrawerWidth = 65;
  const [drawerWidth, setDrawerWidth] = useState(collapsedDrawerWidth);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (isHovered) {
      setDrawerWidth(expandedDrawerWidth);
    } else {
      setDrawerWidth(collapsedDrawerWidth);
    }
  }, [isHovered]);

  const styles = {
    dimmed: {
      "& .hovered": {
        display: "none",
      },
      "&:hover": {
        "& .hovered": {
          display: "block",
        },
        "& .dim": {
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(0, 0, 0, 1))",
          filter: "blur(12px)",
        },
      },
    },
    iconSize: {
      fontSize: "30px",
    },
    listItemButtonStyle: {
      "& .hovered": {
        display: "none",
      },
      "&:hover": {
        color: "#53acff!important",
        "& .not-hovered": {
          display: "none",
        },
        "& .hovered": {
          display: "block",
        },
        "& .dimmed": {
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(0, 0, 0, 1))",
          filter: "blur(12px)",
        },
      },
      "&:hover .MuiTypography-root": {
        color: "#53acff!important",
      },
      "&.Mui-selected": {
        color: "white!important",
      },
      "& .MuiListItemIcon-root": {
        color: "gray!important",
      },
      "& .MuiTypography-root": {
        fontFamily: "Poppins , sans-serif",
        fontWeight: 700,
        fontStyle: "normal",
      },

      "&.Mui-selected .MuiListItemIcon-root": {
        color: "white!important",
      },
      paddingBlock: "16px",
    },
    listItemButtonStyleDimmed: {
      "&:hover": {
        color: "#53acff!important",
        "& .not-hovered": {
          display: "none",
        },
        "& .hovered": {
          display: "block",
        },
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(83, 172, 255, 0.2), rgba(0, 0, 0, 1))",
        filter: "blur(12px)",
      },
      "&:hover .MuiTypography-root": {
        color: "#53acff!important",
      },
      "&.Mui-selected": {
        color: "white!important",
      },
      "& .MuiListItemIcon-root": {
        color: "gray!important",
      },
      "& .MuiTypography-root": {
        fontFamily: "Poppins , sans-serif",
        fontWeight: 700,
        fontStyle: "normal",
      },

      "&.Mui-selected .MuiListItemIcon-root": {
        color: "white!important",
      },
      paddingBlock: "16px",
    },
    "@keyframes drawerAnimation": {
      "0%": {
        width: collapsedDrawerWidth,
      },
      "100%": {
        width: expandedDrawerWidth,
      },
    },
    animatedDrawer: {
      animation: "$drawerAnimation 2s ease-in-out",
      height: "100%",
    },
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div className="w-fit h-full" style={styles.animatedDrawer}>
      <List
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
        className="h-full"
      >
        <Toolbar style={{ padding: "8px" }}>
          <img
            src={LogoIcon}
            style={{ width: isHovered ? "100%" : "auto", height: "92" }}
          />
        </Toolbar>
        <ListItemButton
          sx={styles.listItemButtonStyle}
          selected={pathname == "/"}
        >
          <ListItemIcon>
            <img src={AlertIcon} className="not-hovered" />
            <img src={AlertIconHovered} className="hovered" />
          </ListItemIcon>
          <ListItemText className="txt" primary="Alerts" />
        </ListItemButton>

        <ListItemButton
          sx={styles.listItemButtonStyle}
          className="dim"
          selected={pathname == "/training"}
        >
          <ListItemIcon>
            <img src={Training} className="not-hovered" />
            <img src={TrainingHovered} className="hovered" />
          </ListItemIcon>
          <ListItemText
            style={{ ...styles.iconSize, color: "white" }}
            primary="Training"
          />
        </ListItemButton>

        <Box style={{ position: "relative" }} sx={styles.dimmed}>
          <div className="hovered">
            <ComingSoon />
          </div>
          <ListItemButton
            sx={styles.listItemButtonStyleDimmed}
            selected={pathname == "/automation"}
            className="dim"
          >
            <ListItemIcon>
              <img src={AutomationIcon} />
            </ListItemIcon>
            <ListItemText
              style={styles.iconSize}
              className="poppins-regular"
              primary="Automation"
            />
          </ListItemButton>
        </Box>
        <Box style={{ position: "relative" }} sx={styles.dimmed}>
          <div className="hovered">
            <ComingSoon />
          </div>

          <ListItemButton
            sx={styles.listItemButtonStyleDimmed}
            selected={pathname == "/portfolio"}
            className="dim"
          >
            <ListItemIcon>
              <img src={Portfolio} />
            </ListItemIcon>
            <ListItemText style={styles.iconSize} primary="Portfolio" />
          </ListItemButton>
        </Box>
        <Box style={{ position: "relative" }} sx={styles.dimmed}>
          <div className="hovered">
            <ComingSoon />
          </div>
          <ListItemButton
            sx={styles.listItemButtonStyleDimmed}
            selected={pathname == "/trading"}
            className="dim"
          >
            <ListItemIcon>
              <img src={Trading} />
            </ListItemIcon>
            <ListItemText style={styles.iconSize} primary="Trading" />
          </ListItemButton>
        </Box>

        <Box style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <ListItem>
            <ListItemIcon>
              <img src={Profile} />
            </ListItemIcon>
            <ListItemText
              sx={{
                "& .MuiTypography-root": {
                  fontFamily: "Poppins , sans-serif",
                  fontWeight: 700,
                  fontStyle: "normal",
                },
              }}
              style={styles.iconSize}
              primary="Moni Roy"
              secondary="Beginner"
              primaryTypographyProps={{
                color: "white",
                fontSize: "16px",
              }}
              secondaryTypographyProps={{
                color: "gray",
                fontSize: "12px",
              }}
              className="poppins-bold"
            />
          </ListItem>
          {isHovered && (
            <div style={{ textAlign: "center", paddingBottom: "8px" }}>
              Street Suite. 2.0
            </div>
          )}
        </Box>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }} className="bg-gray-600 rounded-md">
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
              width: drawerWidth,
            },
          }}
          PaperProps={{
            sx: {
              "::selection": {
                color: "white",
              },
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            ":hover & .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 400,
            },
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          PaperProps={{
            sx: {
              backgroundColor: "#181818",
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
