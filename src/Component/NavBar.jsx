import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import "./NavBar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Logo
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <ArrowDropDownIcon />
            </Link>
            {dropdown && <DropDown />}
          </li>

          <Link
            to="/contact-us"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>

          <Link to="/sign-up"
            className="nav-links-mobile"
            onClick={closeMobileMenu}
          >
            Sign Up
          </Link>
        </ul>
        <Button />
      </nav>
    </>
  );
};

export default Navbar;
