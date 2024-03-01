import "./index.css";
const ComingSoon = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        textAlign: "center",
        zIndex: 99,
      }}
    >
      <h1
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
        className="poppins-semibold"
      >
        Coming Soon
      </h1>
    </div>
  );
};
export default ComingSoon;
