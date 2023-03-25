import React from "react";
import NavBar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Header from "../Header/Header";
import classes from "./About.module.css";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <NavBar />
      <Card className={classes.background}>
        <div className={classes["page-wrapper"]}>
          <img
            className={classes.ari}
            src="./images/ariana-grande-album-cover.jpeg"
            alt="Ariana Grande Album Cover"
          ></img>
          <div className={classes["bio-div"]}>
            <Header header={"About Pang"} />
            <Card className={classes.card}> INSERT BIO </Card>
          </div>
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default About;
