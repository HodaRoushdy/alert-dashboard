import { AppBar, Box, InputBase, alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./index.css";

const HeaderComp = () => {
  const Search = styled("div")(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "30ch",
        "&:focus": {
          width: "40ch",
        },
      },
    },
  }));

  return (
    <AppBar position="static">
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 2rem",
          alignItems: "center",
          gap: "1rem",
        }}>
        <h1
          className="bg-red-900"
          style={{ borderLeft: "5px #53ACFF solid ", padding: "0 0.5rem" }}>
          ALERTS
        </h1>
        <Search
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "pink",
          }}>
          <StyledInputBase
            style={{
              backgroundColor: "#414040",
              borderRadius: "0.2rem",
            }}
            className="placeColor"
            placeholder="Search By…"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconWrapper>
            <SearchIcon
              style={{
                backgroundColor: "GrayText",
              }}
            />
          </SearchIconWrapper>
        </Search>
        <img
          src="../../assets/notifications"
          style={{ width: "5rem", backgroundColor: "red" }}
        />
      </Box>
    </AppBar>
  );
};

export default HeaderComp;
