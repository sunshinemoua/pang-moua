import React from "react";
import NavBar from "../Navbar/Navbar";
import Header from "../Header/Header";
import classes from "./About.module.css";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import { paragraph1, paragraph2 } from "../../data";
import BackgroundLogo from "../BackgroundLogo/BackgroundLogo";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className={classes.background}>
        <img className={classes["intro-pic"]} src="./images/jhene1.jpeg" />
        <h1>About</h1>
        <div className={classes["page-wrapper"]}>
          <Card
            className={classes["img-left-wrapper"]}
            header="My Background"
            info={paragraph1}
            src="./images/ariana-grande-album-cover.jpeg"
            toLink=""
          />

          <Card
            className={classes["img-right-wrapper"]}
            header="Inspiration and Trajectory"
            info={paragraph2}
            src="./images/compassion2.png"
            toLink=""
          />
        </div>

        <div className={classes.expertise}>
          <h2> Expertise and Specialties</h2>
          <ul className={classes["expertise-list"]}>
            <div className={classes["column-one"]}>
              <li>skill</li>
              <li>skill</li>
              <li>skill</li>
              <li>skill</li>
            </div>
            <div className={classes["column-two"]}>
              <li>skill</li>
              <li>skill</li>
              <li>skill</li>
              <li>skill</li>
            </div>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
