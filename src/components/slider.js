import React from "react";
import ReactSlider from "react-slider";
import api from "../api";
import StockLength from "./stockLength";

const Slider = () => {
  const [stocks, setStocks] = React.useState([]);
  const [filteredStocks, setFilteredStocks] = React.useState({});
  const [sliderValue, setSliderValue] = React.useState(0);

  const fecthStocks = async () => {
    await api
      .fecthStocks("stocks")
      .then((res) => {
        setStocks(res.data);
      })
      .then(() => filterStock(1))
      .catch((err) => {
        console.log(err);
      });
  };

  const filterStock = (key = 0) => {
    if (key != null && stocks?.length > 0) {
      let search =
        stocks.find((item) => {
          return item?.["Risk Score/Tolerence"] == key;
        }) || {};

      setFilteredStocks(search);
    }
  };

  React.useEffect(() => {
    fecthStocks();
  }, []);

  React.useEffect(() => {
    if (stocks.length > 0) {
      filterStock(sliderValue);
    }
  }, [sliderValue]);

  return (
    <div className="col-12 col-md-6 ">
      <div className=" riskcontainer">
        <label id="slider-label">Risk Score {sliderValue}</label>
        <ReactSlider
          min={0}
          max={10}
          onChange={setSliderValue}
          ariaLabelledby="slider-label"
          className="horizontal-slider"
          thumbClassName="slider-thumb"
          trackClassName="trackclass"
          renderThumb={(props, state) => <div {...props}></div>}
        />
        <div className="d-flex flex-row justify-content-between">
          <h6>Conservative</h6>
          <h6>Moderate</h6>
          <h6>Growth</h6>
        </div>
      </div>
      <div className="mt-4">
        {filteredStocks?.Commodities > 0 && (
          <StockLength
            bgcolor="#ffd3d3"
            name="Commodities"
            width={filteredStocks?.Commodities}
          />
        )}
        {filteredStocks?.["Foriegn Bonds"] > 0 && (
          <StockLength
            bgcolor="#ac9c8b"
            name="Foriegn Bonds"
            width={filteredStocks?.["Foriegn Bonds"]}
          />
        )}
        {filteredStocks?.["Emerging Stocks"] > 0 && (
          <StockLength
            bgcolor="#beffbe"
            name="Emerging Stocks"
            width={filteredStocks?.["Emerging Stocks"]}
          />
        )}
        {filteredStocks?.["Nigerian Bonds"] > 0 && (
          <StockLength
            bgcolor="#ffc2f0"
            name="Nigerian Bonds"
            width={filteredStocks?.["Nigerian Bonds"]}
          />
        )}
        {filteredStocks?.["Real Estate"] > 0 && (
          <StockLength
            bgcolor="#9688b3"
            name="Real Estate"
            width={filteredStocks?.["Real Estate"]}
          />
        )}
        {filteredStocks?.["Tech Stocks"] > 0 && (
          <StockLength
            bgcolor="#ffe7c2"
            name="Tech Stocks"
            width={filteredStocks?.["Tech Stocks"]}
          />
        )}
        {filteredStocks?.["T-Bills"] > 0 && (
          <StockLength
            bgcolor="#b3a188"
            name="T-Bills"
            width={filteredStocks?.["T-Bills"]}
          />
        )}
        {filteredStocks?.["Nigerian Stocks"] > 0 && (
          <StockLength
            bgcolor="#b37436"
            name="Nigerian Stocks"
            width={filteredStocks?.["Nigerian Stocks"]}
          />
        )}
        {filteredStocks?.["Foriegn Stocks"] > 0 && (
          <StockLength
            bgcolor="#ac9c8b"
            name="Foriegn Stocks"
            width={filteredStocks?.["Foriegn Stocks"]}
          />
        )}
        {filteredStocks?.["Alternative"] > 0 && (
          <StockLength
            name="Foriegn Stocks"
            width={filteredStocks?.["Alternative"]}
          />
        )}

        <div className="mt-5">
          <ul className="d-flex flex-row flex-wrap">
            {Object.keys(filteredStocks).map((items) => {
              if (
                filteredStocks[items] < 1 &&
                items != "Risk Score/Tolerence"
              ) {
                return (
                  <li style={{ fontSize: "14px" }} className="text-white ms-3 footer-stocks ">
                    {items} : {filteredStocks[items]}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slider;
