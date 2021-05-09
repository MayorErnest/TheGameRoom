import React, { useState } from "react";
import { AppLogo } from "../../assets/png";
import { CloseMenu, Logo, MenuIcon } from "../../assets/svg";
import "./header.css";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav>
      <header>
        <div className="logo-container">
          <img src={AppLogo} alt="logo" />
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            Table
          </li>
          <li className="option" onClick={closeMobileMenu}>
            Results
          </li>
          <li className="option" onClick={closeMobileMenu}>
            About
          </li>
        </ul>
        {/* <ul>
          <li onClick={closeMobileMenu}>Table</li>
          <li onClick={closeMobileMenu}>Results</li>
          <li onClick={closeMobileMenu}>About</li>
        </ul> */}
        {/* <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div> */}
      </header>
    </nav>
  );
}

export { Header };
