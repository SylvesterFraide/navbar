import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <header className="header">
        <h1>Logo</h1>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </>
  );
};
