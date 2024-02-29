import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu } from "@mui/material";
import React from "react";
import SearchComp from "../SearchComp";
import "./index.css";
import NotificationsIcon from "/notifications.svg";

interface IHeaderProps {
  handleDrawerToggle?: () => void;
}

const HeaderComp = ({ handleDrawerToggle }: IHeaderProps) => {
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1.25rem ",
      }}
    >
      <>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon style={{ color: "#4f46e5" }} />
        </IconButton>
        <div
          style={{
            minWidth: "5px",
            backgroundColor: "#53ACFF",
            minHeight: "72px",
            borderRadius: 50,
          }}
        ></div>
        <div style={{ display: "flex" }}>
          <h1
            style={{
              fontSize: "48px",
              borderRadius: "0.2rem",
              textAlign: "left",
              lineHeight: "72px",
              color: "white",
            }}
            className="poppins-bold"
          >
            ALERTS
          </h1>
        </div>

        <SearchComp placeholder="Search By..." />
        <img src={NotificationsIcon} />
      </>

      {renderMobileMenu}
    </Box>
  );
};

export default HeaderComp;
