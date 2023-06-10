import React, { useEffect, useState } from "react";
import crossIcon from "../assets/icons/crossIcon.svg";
import searchIcon from "../assets/icons/searchIcon.svg";
// import { baseUrl } from "../config/apis";
import { coinData } from "../config/data";
// import axios from "axios";
import selectedIcon from "../assets/icons/selectedIcon.svg";

function PopupModal({ handleClick, handleCoinData }) {
  const [coinsList, setCoinsList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState(false);

  const fetchCoins = async () => {
    // const { data } = await axios.get(baseUrl("inr", 20));
    const data = coinData;
    setCoinsList(data);
  };

  const selectCoin = (e) => {
    setSelected(e.target.id);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  if (true) {
    return (
      <div className="popMainContainer">
        <div className="modalContainer">
          <div className="crossIcon">
            <img onClick={handleClick} src={crossIcon} alt="crossIcon" />
          </div>

          <div className="searchBox">
            <img src={searchIcon} alt="search icon" />
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Chain"
              value={searchText}
            />
          </div>

          <div className="coinsList">
            {coinsList &&
              coinsList
                .filter((coin) => {
                  return searchText.toLowerCase() === ""
                    ? coin
                    : coin.name.toLowerCase().includes(searchText);
                })
                .map((coin) => (
                  <div
                    className="coinsIconName"
                    onClick={selectCoin}
                    key={coin.id}
                  >
                    <div className="nameIcon">
                      <img src={coin.image} alt={coin.id} id={coin.id} />
                      <span
                        className="coinName"
                        onClick={() => handleCoinData(coin)}
                        id={coin.id}
                      >
                        {coin.name}
                      </span>
                    </div>
                    <span>
                      {selected === coin.id ? (
                        <img src={selectedIcon} alt="selected" />
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PopupModal;
