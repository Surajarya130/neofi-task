import React, { useState } from "react";
import neoLogo from "../assets/icons/neoFiLogo.svg";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="headerSection">
        <div className="headerBox">
          <div className="logo">
            <img src={neoLogo} alt="neoLogo" />
          </div>
          <div className="links">
            <ul>
              <li>Trade</li>
              <li>Earn</li>
              <li>Support</li>
              <li>About</li>
            </ul>
          </div>
          <button className="btnConn">Connect Wallet</button>
        </div>

        <div className="app__navbar-menu">
          <HiMenuAlt4
            style={{ color: "#fff" }}
            onClick={() => setToggle(true)}
          />

          {/* Hamburger navbar for  mobile screen size, basically toggling state and show side bar */}
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <>
                <ul>
                  {["Trade", "Earn", "Support", "About"].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
                <button className="btnConn" id="btnInMob">
                  Connect Wallet
                </button>
              </>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
