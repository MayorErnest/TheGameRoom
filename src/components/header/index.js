import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
            <Link to="/">
              <img src={AppLogo} alt="logo" />
            </Link>
          </div>
          <div onClick={() => setClick(!click)}>
            {click ? <MenuIcon /> : <CloseMenu />}
          </div>
        </div>
        <ul className={`nav-links ${click ? "toggle" : ""}`}>
          <li>
            <NavLink to="/" exact activeClassName="active-link">
              Table
            </NavLink>
          </li>
          <li>
            <NavLink to="/results" activeClassName="active-link">
              Results
            </NavLink>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1WcPiO-YnberCzEslkPnO4kyYIszoiVHf/view?usp=sharing"
              target="_blank"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
