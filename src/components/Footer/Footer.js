import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export default Footer;
