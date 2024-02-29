import { styled, alpha, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Search = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.7),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
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
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
  },
}));
interface IProps {
  placeholder: string;
}
const SearchComp = ({ placeholder }: IProps) => {
  return (
    <Search
      style={{
        display: "flex",
        backgroundColor: "#414040",
        borderRadius: "0.2rem",
      }}
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "block",
          lg: "block",
        },
      }}>
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Search>
  );
};

export default SearchComp;
