import React from "react";
import "./Header.module.css";
const Header = ({ header }) => {
  return <h1 style={{ marginTop: "40px" }}>{header}</h1>;
};

export default Header;
