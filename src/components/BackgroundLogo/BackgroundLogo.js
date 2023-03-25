import React from "react";
import logo from "./PM-logo-transparent.png";
import classes from "./BackgroundLogo.module.css";

const BackgroundLogo = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}></div>
    </div>
  );
};

export default BackgroundLogo;
