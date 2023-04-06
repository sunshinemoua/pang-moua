import React from "react";
import NavBar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Header from "../Header/Header";
import Video from "../Video/Video";
import classes from "./Portfolio.module.css";
import Footer from "../Footer/Footer";
import BackgroundLogo from "../BackgroundLogo/BackgroundLogo";

const Portfolio = () => {
  return (
    <div className={classes.page}>
      <NavBar />
      <div className={classes.background}>
        <div className={classes["outer-div"]}>
          <Header header={"Work Samples"} />
          <div className={classes["wrapper-videos"]}>
            <Video
              description={"THIS IS A SAMPLE DESCRIPTION"}
              src={"https://www.youtube.com/embed/ywBD6HiD8vQ"}
              title={"6 Reasons Why Computer Science is the Best Major"}
            />
            <Video
              description={"THIS IS A SAMPLE VIDEO DESCRIPTION"}
              src={"https://www.youtube.com/embed/S1iAe-H4DaY"}
              title={"Top 7 Computer Science Books"}
            />
            <Video
              description={"THIS IS A SAMPLE DESCRIPTION"}
              src={"https://www.youtube.com/embed/ywBD6HiD8vQ"}
              title={"6 Reasons Why Computer Science is the Best Major"}
            />
            <Video
              description={"THIS IS A SAMPLE DESCRIPTION"}
              src={"https://www.youtube.com/embed/ywBD6HiD8vQ"}
              title={"6 Reasons Why Computer Science is the Best Major"}
            />
            <Video
              description={"THIS IS A SAMPLE DESCRIPTION"}
              src={"https://www.youtube.com/embed/ywBD6HiD8vQ"}
              title={"6 Reasons Why Computer Science is the Best Major"}
            />
            <Video
              description={"THIS IS A SAMPLE DESCRIPTION"}
              src={"https://www.youtube.com/embed/ywBD6HiD8vQ"}
              title={"6 Reasons Why Computer Science is the Best Major"}
            />
            <Video
              description={"THIS IS A SAMPLE DESCRIPTION"}
              src={"https://www.youtube.com/embed/ywBD6HiD8vQ"}
              title={"6 Reasons Why Computer Science is the Best Major"}
            />
            <Video
              description={"THIS IS A SAMPLE DESCRIPTION"}
              src={"https://www.youtube.com/embed/ywBD6HiD8vQ"}
              title={"6 Reasons Why Computer Science is the Best Major"}
            />
            <Video
              description={"THIS IS A SAMPLE DESCRIPTION"}
              src={"https://www.youtube.com/embed/ywBD6HiD8vQ"}
              title={"6 Reasons Why Computer Science is the Best Major"}
            />
            <Video
              description={"THIS IS A SAMPLE DESCRIPTION"}
              src={"https://www.youtube.com/embed/ywBD6HiD8vQ"}
              title={"6 Reasons Why Computer Science is the Best Major"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
