import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Header from "../Header/Header";
import classes from "./Resume.module.css";
import Footer from "../Footer/Footer";
import BackgroundLogo from "../BackgroundLogo/BackgroundLogo";

const Resume = () => {
  return (
    <div>
      <NavBar />
      <div className={classes.background}>
        <div className={classes["outer-div"]}>
          <Header header={"Resume"} />
          <div className={classes.actions}>
            <a
              className={classes.btn}
              href="/images/sample-resume.pdf"
              download
            >
              Download my resume
            </a>
            <NavLink className={classes.btn} to="/contact">
              Contact me
            </NavLink>
          </div>
        </div>
        <BackgroundLogo />
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
