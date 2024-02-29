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
      backgroundColor: "#414040",
      borderRadius: "0.6rem",
      padding: "0.2rem 1rem",
      marginBottom: "0.7rem",
    },
    forBG: {
      backgroundColor: "#313131",
      padding: "1rem 2rem",
    },
    onePiece: {
      display: "flex",
      alignItems: "center",
      borderRight: "1px #545454 solid",
      width: "25%",
      justifyContent: "center",
      gap: "2rem",
      color: "white",
    },
    lastPiece: {
      display: "flex",
      alignItems: "center",
      width: "25%",
      justifyContent: "center",
      gap: "2rem",
      color: "white",
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
      <Accordion key={idx} style={styles.AllRow}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "&.Mui-expanded": {
              backgroundColor: "#53ACFF",
              borderRadius: "0.3rem",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <div style={styles.onePiece}>
              <img src={firstImg} />
              <p>{firstCol}</p>
            </div>
            <div style={styles.onePiece}>
              <img src={secondImg} />
              <p>200</p>
            </div>
            <div style={styles.onePiece}>
              <img src={thirdImg} />
              <p style={{ color: `${colorThirdCol}` }}>-0.25 %</p>
            </div>
            <div style={styles.lastPiece}>
              <img src={forthImg} />
              <p>{forthCol}</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className=" bg-black text-white rounded-md px-80 ">
          <div className=" px-6">
            <p className="leading-10 tracking-normal">
              ${firstCol} just announced an acquisition of $NFLX at $200 B.
            </p>
            <span className="tracking-normal">
              This is an
              <a href="#" className="underline text-cyan-400">
                arbitrage opportunity
              </a>
              , with the max gain being %X if the deal closes, but the possible
              risk <br />
              <span>
                is %Y if the deal fails, If the deal success s % and therefore
                the recommended play is
                <a href="#" className="underline text-cyan-400">
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
      <HeaderComp />
      <div style={styles.forBG}>{renderInputData}</div>
    </Box>
  );
};

export default Alert;
