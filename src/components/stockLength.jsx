import React from "react";

const StockLength = ({
  name = "testing",
  bgcolor = "",
  width = "20%",
  fontColor,
}) => {
  return (
    <div className="d-flex flex-row stkitem my-2 align-items-center">
      <div className="col-4 col-md-4 text-start">
        <h6 className="stklabel">{name}</h6>
      </div>
      <div
        style={{
          width: width * 2 + "%",
          background: bgcolor,
          border: "1px solid #ffffff",
        }}
        className="grapheItem ms-3 d-flex flex-row align-items-center justify-content-center"
      >
        <p
          style={{ fontSize: "13px", color: fontColor ?? "#000" }}
          className="m-0 "
        >
          {" "}
          {width}%
        </p>
      </div>
    </div>
  );
};

export default StockLength;
