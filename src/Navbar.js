import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes["navbar-wrapper"]}>
      <NavLink className={classes.pang} to="/">
        Pang Moua
      </NavLink>
      <NavLink className={classes.contact} to="/contact">
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
