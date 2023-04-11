import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavLinks.module.css";
import Dropdown from "../../Dropdown/Dropdown";

const NavLinks = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className={classes["navlink-wrapper"]}>
      <NavLink className={classes.pang} to="/">
        Pang Moua
      </NavLink>

      <span className={classes["navlink-pages"]}>
        <NavLink className={classes.link} to="/about">
          About
        </NavLink>
        <NavLink className={classes.link} to="/portfolio">
          Portfolio
        </NavLink>

        <div className={classes["service-dropdown"]}>
          <NavLink
            className={classes.link}
            onClick={() => setDropdown((prev) => !prev)}
          >
            Services
          </NavLink>
          {dropdown && <Dropdown />}
        </div>

        <NavLink className={classes.link} to="/resume">
          Resume
        </NavLink>
        <NavLink className={classes.link} to="/contact">
          Contact
        </NavLink>
      </span>
    </div>
  );
};

export default NavLinks;
