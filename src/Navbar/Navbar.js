import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes["navbar-wrapper"]}>
      <NavLink className={classes.pang} to="/">
        Pang Moua
      </NavLink>
      <span className={classes["navbar-pages"]}>
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
      </span>
    </div>
  );
};

export default Navbar;
