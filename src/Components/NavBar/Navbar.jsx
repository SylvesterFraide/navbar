import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <header className="header">
        <h1>Logo</h1>
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
