import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Header from "../Header/Header";
import classes from "./Resume.module.css";

const Resume = () => {
  const downloadResume = () => {
    fetch("sample-resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = URL.createObjectURL(blob);
        let resumeLink = document.createElement("a");
        resumeLink.href = fileURL;
        resumeLink.download = "sample-resume.pdf";
        resumeLink.click();
      });
    });
  };

  return (
    <div>
      <Navbar />
      <Card className={classes.background}>
        <div className={classes["outer-div"]}>
          <Header header={"Resume"} />
          <div className={classes.actions}>
            <a
              className={classes.btn}
              href="/images/sample-resume.pdf"
              download="sample-resume"
            >
              Download my resume
            </a>
            <NavLink className={classes.btn} to="/contact">
              Contact me
            </NavLink>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Resume;
