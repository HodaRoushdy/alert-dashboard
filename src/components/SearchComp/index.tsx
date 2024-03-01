import SearchIcon from "@mui/icons-material/Search";
import { InputBase, alpha, styled } from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.7),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {},
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
  fontSize: string;
  paddingBlock: number;
}
const SearchComp = ({ placeholder, fontSize, paddingBlock }: IProps) => {
  return (
    <Search
      style={{
        display: "flex",
        backgroundColor: "#414040",
        borderRadius: "8px",
      }}
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "block",
          lg: "block",
        },
      }}
    >
      <StyledInputBase
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        sx={{
          color: "white",
          lineHeight: 72,
          fontSize: fontSize,
          paddingBlock: paddingBlock,
        }}
      />
      <SearchIconWrapper>
        <SearchIcon
          sx={{
            color: "white",
          }}
        />
      </SearchIconWrapper>
    </Search>
  );
};

export default SearchComp;
