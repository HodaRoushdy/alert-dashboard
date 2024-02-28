import { AlertData } from "../../Data";

const Alert = () => {


    const styles = {
        AllRow: {
        backgroundColor: "#414040",
        display: "flex",
        borderRadius: "0.6rem",
        padding: "0.5rem 2rem",
        marginBottom: "1rem",
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
        },
        lastPiece: {
        display: "flex",
        alignItems: "center",
        width: "25%",
        justifyContent: "center",
        gap: "2rem",
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
        <div key={idx} style={styles.AllRow}>
            <div
            style={{
                display: "flex",
                width: "100%",
            }}>
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
        </div>
        )
    );

return <div style={styles.forBG}>{renderInputData}</div>;
};

export default Alert;
