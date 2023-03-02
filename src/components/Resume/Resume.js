import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Header from "../Header/Header";
import classes from "./Resume.module.css";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <Card className={classes.background}>
        <div className={classes["outer-div"]}>
          <Header header={"Resume"} />
          <span className={classes.actions}>
            <Button className={classes.download} type="button">
              Download my resume
            </Button>
            <NavLink className={classes.contact} to="/contact">
              Contact me!
            </NavLink>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Resume;
