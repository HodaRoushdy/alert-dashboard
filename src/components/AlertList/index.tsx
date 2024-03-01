import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import { AlertData } from "../../Data";
import HeaderComp from "../Header";
import "./index.css";

const Alert = () => {
  const styles = {
    AllRow: {
      borderRadius: "0.6rem",
      marginBottom: "0.7rem",
    },
    forBG: {
      backgroundColor: "#313131",
      padding: "1rem 2rem",
    },
    onePiece: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      borderRight: "1px #545454 solid",
      color: "white",
      overflow: "auto",
      textOverflow: "ellipsis",
      width: "100%",
    },
    lastPiece: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      color: "white",
      overflow: "auto",
      textOverflow: "ellipsis",
      width: "100%",
    },
  };
  const renderInputData = AlertData.map(
    (
      {
        firstImg,
        firstCol,
        secondImg,
        colorThirdCol,
        thirdImg,
        forthImg,
        forthCol,
      },
      idx
    ) => (
      <Accordion
        key={idx}
        style={styles.AllRow}
        sx={{
          "&.Mui-expanded": {
            backgroundColor: "black",
            borderRadius: "8px",
          },
          borderRadius: "8px",
          backgroundColor: "#414040",
        }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "&.Mui-expanded": {
              backgroundColor: "#53ACFF",
              borderRadius: "8px",
            },
            borderRadius: "8px",
            backgroundColor: "#414040",
          }}
        >
          <div className="grid grid-cols-4 w-full">
            <div style={styles.onePiece} className="col-span-1">
              <div className="flex gap-6 px-2 items-center">
                <img src={firstImg} />
                <p style={{ textWrap: "nowrap" }}>{firstCol}</p>
              </div>
            </div>
            <div style={styles.onePiece} className="col-span-1">
              <div className="flex gap-6 px-2 items-center">
                <img src={secondImg} />
                <p style={{ textWrap: "nowrap" }}>200</p>
              </div>
            </div>
            <div style={styles.onePiece} className="col-span-1">
              <div className="flex gap-6 px-2 items-center">
                <img src={thirdImg} />
                <p style={{ color: `${colorThirdCol}`, textWrap: "nowrap" }}>
                  -0.25 %
                </p>
              </div>
            </div>
            <div style={styles.lastPiece} className="col-span-1">
              <div className="flex gap-6 px-2 items-center">
                <img src={forthImg} />
                <p style={{ textWrap: "nowrap" }}>{forthCol}</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className="text-white ">
          <div className="px-6">
            <p className="leading-10 tracking-normal">
              <span className="poppins-bold">${firstCol}</span> just announced
              an acquisition of $NFLX at $200 B.
            </p>
            <span className="tracking-normal">
              This is an &nbsp;
              <a href="#" className="underline text-blue-400">
                arbitrage opportunity
              </a>
              , with the max gain being %X if the deal closes, but the possible
              risk <br />
              <span>
                is %Y if the deal fails, If the deal success s % and therefore
                the recommended play is &nbsp;
                <a href="#" className="underline text-blue-400">
                  long/short
                </a>
                <br />
              </span>
              $ABC
            </span>
          </div>
        </AccordionDetails>
      </Accordion>
    )
  );

  return (
    <Box
      sx={{
        backgroundColor: "#313131",
      }}
    >
      <div style={styles.forBG}>
        <HeaderComp />
        {renderInputData}
      </div>
    </Box>
  );
};

export default Alert;
