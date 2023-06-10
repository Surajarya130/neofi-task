import React, { useState } from "react";
// import ethIcon from "../assets/icons/etheriumIcon.svg";
import arrIcon from "../assets/icons/arrDown.svg";
import PopupModal from "./PopupModel";

function CustomCard() {
  const [showModal, setShowModal] = useState(false);
  const [currInput, setCurrInput] = useState("");
  const [coinData, setCoinData] = useState({});

  const handleSelect = () => {
    setShowModal(true);
    console.log(showModal, "show modal in custom card jsx");
  };

  const handleCoinData = (data, show) => {
    setCoinData(data);
  };

  return (
    <>
      <div className="customCardBox">
        <div className="card">
          <div className="icon">
            <div className="iconContent">
              {coinData.image ? (
                <img className="iconStyle" src={coinData.image} alt="eth" />
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="cardContentBox">
            <div className="cardContent">
              <div className="currVal">
                <p className="valText">Current Val</p>

                {coinData.current_price && (
                  <p className="val">&#8377; {coinData.current_price}</p>
                )}
              </div>

              <div className="selectDropDown">
                <div className="selectBar" onClick={handleSelect}>
                  <span>
                    {coinData.image ? (
                      <img src={coinData.image} alt={coinData.id} />
                    ) : (
                      ""
                    )}

                    {coinData.name ? coinData.name : "Select a coin"}
                  </span>
                  <img src={arrIcon} alt="arrowkey" />
                </div>
              </div>

              <div className="inputAmt">
                <span>Amount you want to invest</span>
                <div className="inputAmtBox">
                  <div className="innerAmtBox">
                    <input
                      type="number"
                      value={currInput}
                      onChange={(e) => setCurrInput(e.target.value)}
                      name="amt"
                      disabled={coinData.current_price ? false : true}
                      placeholder="0.00"
                    />
                    <span className="curr">INR</span>
                  </div>
                </div>
              </div>

              <div className="result">
                <span>
                  Estimate Number of {coinData.name ? coinData.name : "coin "}{" "}
                  You will Get
                </span>
                <div className="textBox">
                  <p>
                    {coinData.current_price
                      ? (currInput / coinData.current_price).toFixed(5)
                      : "No Price"}
                  </p>
                </div>
              </div>

              <button className="buyBtn">Buy</button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <PopupModal
          handleClick={() => setShowModal(false)}
          handleCoinData={handleCoinData}
        />
      )}
    </>
  );
}

export default CustomCard;
