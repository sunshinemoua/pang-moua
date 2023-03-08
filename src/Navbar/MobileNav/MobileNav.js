import React, { useState } from "react";
import { CiMenuBurger as Burger } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import classes from "./MobileNav.module.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes["mobile-wrapper"]}>
      <Burger className={classes.burger} onClick={() => setOpen(!open)} />
      {open && (
        <div
          className={classes["list-menu"]}
          id={classes.overlay}
          onClick={() => setOpen(!open)}
        >
          <NavLink className={classes.link} to="/">
            Home
          </NavLink>
          <NavLink className={classes.link} to="/about">
            About
          </NavLink>
          <NavLink className={classes.link} to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className={classes.link} to="/resume">
            Resume
          </NavLink>
          <NavLink className={classes.link} to="/contact">
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
