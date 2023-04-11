import React from "react";
import classes from "./Dropdown.module.css";
import { NavLink } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className={classes["services-submenu"]}>
      <NavLink to="/services/in-person">InPerson</NavLink>
      <NavLink to="/services/remote">Remote</NavLink>
      <NavLink to="/services/hmong-services">Hmong Interpreting</NavLink>
      <NavLink to="/services/asl-services">ASL Interpreting</NavLink>
    </div>
  );
};

export default Dropdown;
