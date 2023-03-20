import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <NavLink className={classes.links} to="/">
        Home
      </NavLink>
      <NavLink className={classes.links} to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink className={classes.links} to="/contact">
        Contact
      </NavLink>
    </div>
  );
};

export default Footer;
