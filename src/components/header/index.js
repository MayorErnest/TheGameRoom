import React, { useState } from "react";
import { AppLogo } from "../../assets/png";
import { CloseMenu, MenuIcon } from "../../assets/svg";
import "./header.css";

function Header() {
  const [click, setClick] = useState(true);

  return (
    <header>
      <nav>
        <div className="nav-head">
          <div className="logo-container">
            <img src={AppLogo} alt="logo" />
          </div>
          <div onClick={() => setClick(!click)}>
            {click ? <MenuIcon /> : <CloseMenu />}
          </div>
        </div>
        <ul className={`nav-links ${click ? "toggle" : ""}`}>
          <li>Table</li>
          <li>Results</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
