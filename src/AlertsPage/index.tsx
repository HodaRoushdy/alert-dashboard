import {
  AutocompleteGetTagProps,
  useAutocomplete,
} from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import { IndustryItems } from "../Data";
import Alert from "../components/AlertList";
import SearchComp from "../components/SearchComp";
import "./index.css";
interface FilmOptionType {
  title: string;
}
interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

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
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
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
      className="col-span-1 flex"
      style={{
        padding: "0 0.5rem",
        borderLeft: "1px solid white",
      }}
    >
      <div className="item flex gap-2 w-fit px-2">
        <img className="w-3" src={icon} />
        <h6
          style={{ color: "white", fontSize: "12px", lineHeight: "26px" }}
          className="poppins-regular  w-fit"
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
    <div className="grid xl:grid-cols-6 lg:grid-cols-5 ">
      <div className="xl:col-span-4 lg:col-span-3 ">
        <Alert />
      </div>
      <div
        className="xl:col-span-2 lg:col-span-2"
        style={{
          backgroundColor: "#181818",
          padding: "0 1rem",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white",
          }}
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
              <Label {...getInputLabelProps()} style={{ color: "#979797" }}>
                Filters Applied
              </Label>
              <span style={{ color: "white" }}>clear all</span>
            </div>
            <div style={{ backgroundColor: "#313131" }}>
              <InputWrapper
                style={{ width: "100%" }}
                ref={setAnchorEl}
                className={focused ? "focused" : ""}
              >
                {value.map((option: FilmOptionType, index: number) => (
                  <StyledTag
                    // style={{ backgroundColor: "#53ACFF" }}
                    label={option.title}
                    {...getTagProps({ index })}
                  />
                ))}
                <input {...getInputProps()} />
              </InputWrapper>
            </div>
          </div>
          {groupedOptions.length > 0 ? (
            <Listbox {...getListboxProps()}>
              {(groupedOptions as typeof choiceOptions).map((option, index) => (
                <li {...getOptionProps({ option, index })}>
                  <span>{option.title}</span>
                  <CheckIcon fontSize="small" />
                </li>
              ))}
            </Listbox>
          ) : null}
        </Root>

        <div className="stock">
          <h3 style={{ color: "white" }}>stock</h3>
          <SearchComp placeholder="$ TICKER" />
        </div>
        <div className="industry">
          <h5 style={{ color: "white" }}>Industry</h5>
          <div className="grid grid-cols-2">{renderIndustry}</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "white" }}>
              <h5>Market Cap</h5>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="large"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="micro"
                    control={<Radio />}
                    label="micro"
                  />
                  <FormControlLabel
                    value="small"
                    control={<Radio />}
                    label="small"
                  />
                  <FormControlLabel
                    value="large"
                    control={<Radio />}
                    label="large"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div style={{ color: "white" }}>
              <h5>Risk Level</h5>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="mid risk"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="low risk"
                    control={<Radio />}
                    label="low risk"
                  />
                  <FormControlLabel
                    value="mid risk"
                    control={<Radio />}
                    label="mid risk"
                  />
                  <FormControlLabel
                    value="low risk"
                    control={<Radio />}
                    label="low risk"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          <div style={{ color: "white" }}>
            <h5>strategy</h5>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button style={{ backgroundColor: "#53ACFF" }} variant="contained">
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertPage;
