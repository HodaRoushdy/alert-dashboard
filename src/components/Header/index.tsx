import { Box, Menu } from "@mui/material";
import React from "react";
import SearchComp from "../SearchComp";
import "./index.css";
import NotificationsIcon from "/notifications.svg";

// interface IHeaderProps {
//   handleDrawerToggle?: () => void;
// }

const HeaderComp = () => {
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
        paddingBlock: 2,
      }}
    >
      <>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon style={{ color: "#4f46e5" }} />
        </IconButton> */}
        {/* <div
          style={{
            minWidth: "5px",
            backgroundColor: "#53ACFF",
            minHeight: "72px",
            borderRadius: 50,
          }}
        ></div> */}
        <div style={{ display: "flex" }}>
          <h1
            style={{
              fontSize: "48px",
              borderRadius: "0.2rem",
              textAlign: "left",
              lineHeight: "72px",
              color: "white",
            }}
            className="poppins-bold alerts"
          >
            ALERTS
          </h1>
        </div>

        <Box
          sx={{
            display: { xs: "none", sm: "block", md: "block", lg: "block" },
            flex: 1,
          }}
        >
          <SearchComp
            paddingBlock={0.5}
            fontSize="15px"
            placeholder="Search By..."
          />
        </Box>
        <img src={NotificationsIcon} />
      </>

      {renderMobileMenu}
    </Box>
  );
};

export default HeaderComp;
