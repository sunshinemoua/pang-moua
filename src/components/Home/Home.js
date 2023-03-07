import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../NavBar/NavBar";
import Card from "../Card/Card";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Card className={classes.background}>
        <div className={classes["outer-div"]}>
          <span className={classes.header}>
            <h1 className={classes["pang-moua"]}> Pang Moua</h1>
            <h2 className={classes.services}>
              Hmong, English, and ASL Interpreter
            </h2>
          </span>
          <NavLink className={classes["learn-more"]} to="/portfolio">
            Learn More {">>"}
          </NavLink>
        </div>
      </Card>
    </div>
  );
};

export default Home;
