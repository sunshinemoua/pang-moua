import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Card from "../Card/Card";
import classes from "./Home.module.css";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
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
      <Footer />
    </div>
  );
};

export default Home;
