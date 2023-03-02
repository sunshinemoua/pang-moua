import React from "react";
import classes from "./Header.module.css";
const Header = ({ header }) => {
  return (
    <div className={classes.header}>
      <h1>{header}</h1>
    </div>
  );
};

export default Header;
