import React from "react";
import Navbar from "../../NavBar/NavBar";
import Card from "../Card/Card";
import Header from "../Header/Header";
import classes from "./About.module.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <Card className={classes.background}>
        <div className={classes["outer-div"]}>
          <Header header={"About Pang Moua"} />
          <div className={classes.bio}>
            <Card className={classes.card}> INSERT BIO </Card>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default About;
