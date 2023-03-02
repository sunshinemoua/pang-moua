import React from "react";
import Navbar from "../../Navbar/Navbar";
import Card from "../Card/Card";
import Header from "../Header/Header";
import classes from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Card className={classes.background}>
        <div className={classes["outer-div"]}>
          <Header header={"Work Samples"} />
          <div className={classes.videos}>
            <span>
              description of video1
              <Card className={classes.card}> Video Content</Card>
            </span>
            <span>
              description of video2
              <Card className={classes.card}> Video Content</Card>
            </span>
            <span>
              description of video3
              <Card className={classes.card}> Video Content</Card>
            </span>
            <span>
              description of video4
              <Card className={classes.card}> Video Content</Card>
            </span>
            <span>
              description of video5
              <Card className={classes.card}> Video Content</Card>
            </span>
            <span>
              description of video6
              <Card className={classes.card}> Video Content</Card>
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Portfolio;
