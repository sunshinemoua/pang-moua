import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes["footer-wrapper"]}>
      <div className={classes["header-wrapper"]}>
        <div className={classes["logo-header"]}>
          <img
            className={classes.logo}
            src="./images/PM-logo-transparent.png"
            alt="logo"
          />
          <div className={classes.name}> PM Interpreting LLC</div>
        </div>
        <div className={classes.copyright}>&copy; PM Interpreting LLC</div>
      </div>

      <div className={classes["services-terms-wrapper"]}>
        <NavLink className={classes.links} to="/about">
          Services
        </NavLink>
        <NavLink className={classes.links} to="/portfolio">
          Terms and Conditions
        </NavLink>
      </div>

      <div className={classes["quick-links-wrapper"]}>
        <div className={classes["links-header"]}> Quick Links</div>
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
    </div>
  );
};

export default Footer;
