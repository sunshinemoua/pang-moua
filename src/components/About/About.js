import React from "react";
import NavBar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Header from "../Header/Header";
import classes from "./About.module.css";

const About = () => {
  return (
    <div>
      <NavBar />
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
