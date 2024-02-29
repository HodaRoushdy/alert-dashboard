import {
  Box,
  IconButton,
  Menu,
  Toolbar,

} from "@mui/material";
import "./index.css";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "../../../public/notifications.svg";
import SearchComp from "../SearchComp";

interface IHeaderProps {
  handleDrawerToggle: () => void;
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
      onClose={handleMobileMenuClose}></Menu>
  );

  return (
    <>
      <Toolbar
        style={{ display: "flex", gap: "0.5rem", backgroundColor: "#313131" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}>
          <MenuIcon style={{ color: "#4f46e5" }} />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />
        <div>
          <h1
            style={{
              borderLeft: "5px solid #53ACFF",
              borderRadius: "0.2rem",
              padding: "0 0.5rem",
            }}>
            ALERTS
          </h1>
        </div>

        <SearchComp placeholder="Search By..." />
        <img src={NotificationsIcon} />
      </Toolbar>

      {renderMobileMenu}
    </>
  );
};

export default HeaderComp;
