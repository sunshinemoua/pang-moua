import React from "react";
import NavBar from "../Navbar/Navbar";
import Header from "../Header/Header";
import classes from "./About.module.css";
import Footer from "../Footer/Footer";
import BackgroundLogo from "../BackgroundLogo/BackgroundLogo";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className={classes.background}>
        <div className={classes["page-wrapper"]}>
          <img
            className={classes.ari}
            src="./images/ariana-grande-album-cover.jpeg"
            alt="Ariana Grande Album Cover"
          ></img>
          <div className={classes["bio-div"]}>
            <Header header={"About Pang"} />
            <div className={classes.card}> INSERT BIO </div>
          </div>
          <BackgroundLogo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
