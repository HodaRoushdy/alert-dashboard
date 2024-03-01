import {
  AutocompleteGetTagProps,
  useAutocomplete,
} from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import { EmblaOptionsType } from "embla-carousel";
import { Assets, IndustryItems, Strategy } from "../Data";
import Alert from "../components/AlertList";
import SearchComp from "../components/SearchComp";
import EmblaCarousel from "../components/embla-carousel/EmblaCarousel";
import "./index.css";
interface FilmOptionType {
  title: string;
}
interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}
const OPTIONS: EmblaOptionsType = { axis: "y", loop: true };

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 14px;
`
);

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")(
  ({ theme }) => `
  width: 300px;
  border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  &.focused {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

const StyledTag = styled(Tag)<TagProps>(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#53ACFF"
  };
  border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);
const choiceOptions = [{ title: "Real Estate" }];
function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

const AlertPage = () => {
  const renderIndustry = IndustryItems.map(({ icon, title }, idx) => (
    <div
      key={idx}
      className="col-span-1"
      style={{
        padding: "0 0.5rem",
        borderLeft: "1px solid white",
        overflow: "hidden",
      }}
    >
      <div
        className="item flex gap-2 w-fit px-2"
        style={{
          overflow: "hidden",
        }}
      >
        <img className="w-3" src={icon} />
        <h6
          style={{
            color: "white",
            fontSize: "12px",
            lineHeight: "26px",
            textWrap: "nowrap",
            overflow: "hidden",
          }}
          className="poppins-regular "
        >
          {title}
        </h6>
      </div>
    </div>
  ));

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [choiceOptions[0]],
    multiple: true,
    options: choiceOptions,
    getOptionLabel: (option) => option.title,
  });
  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-1 h-screen">
      <div
        className="xl:col-span-4 lg:col-span-4 md:col-span-1 bg-red-200"
        style={{
          backgroundColor: "#313131",
        }}
      >
        <Alert />
      </div>
      <Box
        className="xl:col-span-2 lg:col-span-2 md:col-span-1"
        sx={{
          padding: {
            xs: "32px 18px 32px 18px",
            sm: "32px 18px 32px 18px",
            md: "32px 18px 32px 18px",
            lg: "32px 12px 32px 0px",
            xl: "32px 12px 32px 0px",
          },
        }}
        style={{
          backgroundColor: "#313131",
        }}
      >
        <div
          className="p-4"
          style={{
            backgroundColor: "#181818",
            borderRadius: "10px",
          }}
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
            }}
            className="poppins-bold"
          >
            Filters
          </h1>
          <Root>
            <div {...getRootProps()}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <Label
                  {...getInputLabelProps()}
                  style={{ color: "#979797", fontSize: "14px" }}
                  className="poppins-lightbold"
                >
                  Filters Applied
                </Label>
                <span className="text-white">Clear all</span>
              </div>
              <div className="pb-4">
                <InputWrapper
                  style={{
                    width: "100%",
                    backgroundColor: "#202020",
                    border: "0",
                    paddingBottom: "14px",
                    paddingTop: "4px",
                  }}
                  ref={setAnchorEl}
                  className={focused ? "focused " : ""}
                >
                  {value.map((option: FilmOptionType, index: number) => (
                    <StyledTag
                      label={option.title}
                      {...getTagProps({ index })}
                      sx={{
                        height: "16px",
                        fontSize: "10px",
                        marginInline: "4px",
                        borderRadius: "6px",
                        border: "0",
                      }}
                    />
                  ))}
                  <input
                    {...getInputProps()}
                    style={{
                      backgroundColor: "#202020",
                      color: "white",
                    }}
                  />
                </InputWrapper>
                {groupedOptions.length > 0 ? (
                  <Listbox {...getListboxProps()}>
                    {(groupedOptions as typeof choiceOptions).map(
                      (option, index) => (
                        <li {...getOptionProps({ option, index })}>
                          <span>{option.title}</span>
                          <CheckIcon fontSize="small" />
                        </li>
                      )
                    )}
                  </Listbox>
                ) : null}
              </div>
            </div>
          </Root>

          <div
            className="px-4 py-1"
            style={{ backgroundColor: "#202020", borderRadius: "8px" }}
          >
            <div className="stock">
              <h1 className="poppins-bold my-3 text-white">Stock</h1>
              <div>
                <SearchComp
                  fontSize={"14px"}
                  placeholder="$ TICKER"
                  paddingBlock={0}
                />
              </div>
            </div>
            <div className="industry">
              <h1 className="poppins-bold my-3 text-white">Industry</h1>
              <div className="grid grid-cols-2">{renderIndustry}</div>
            </div>
            <div className="flex grid grid-cols-2 py-4">
              <div className="text-white text-center">
                <h1 className="poppins-bold my-3 text-white">Market Cap</h1>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="large"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="micro"
                      control={<Radio />}
                      label="Micro"
                    />
                    <FormControlLabel
                      value="small"
                      control={<Radio />}
                      label="Small"
                    />
                    <FormControlLabel
                      value="large"
                      control={<Radio />}
                      label="Large"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="text-white text-center">
                <h1 className="poppins-bold my-3 text-white">Risk Level</h1>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="mid risk"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="low risk"
                      control={<Radio />}
                      label="Low Risk"
                    />
                    <FormControlLabel
                      value="mid risk"
                      control={<Radio />}
                      label="Mid Risk"
                    />
                    <FormControlLabel
                      value="high risk"
                      control={<Radio />}
                      label="High Risk"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-white mb-6 mt-2 ">
                <h1 className="text-center poppins-bold my-3 text-white">
                  Strategy
                </h1>
                <EmblaCarousel slides={Strategy} options={OPTIONS} />
              </div>
              <div className="text-white mb-6 mt-2 ">
                <h1 className="text-center poppins-bold my-3 text-white">
                  Assets
                </h1>
                <EmblaCarousel slides={Assets} options={OPTIONS} />
              </div>
            </div>
          </div>

          <div className="mt-4 mb-1 text-center">
            <Button
              style={{ backgroundColor: "#53ACFF", width: "30%" }}
              variant="contained"
            >
              <h1
                className="poppins-semibold"
                style={{ fontSize: "20px", lineHeight: "30px" }}
              >
                Apply
              </h1>
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default AlertPage;
