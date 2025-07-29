import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header className="header">
        <Link to='/'><h1>Logo</h1></Link>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/Services">Services</a>
          <a href="/Product">Product</a>
          <a href="/Contact">Contact</a>
        </nav>
      </header>
    </>
  );
};
