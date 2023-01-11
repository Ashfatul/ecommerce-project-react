import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="this is site logo" />
      <nav id="top-nav">
        <a href="/shop">Shop</a>
        <a href="/review">Order review</a>
        <a href="/manage">Manage</a>
      </nav>
    </header>
  );
};

export default Header;
