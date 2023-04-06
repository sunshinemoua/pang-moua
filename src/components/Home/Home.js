import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Card from "../Card/Card";
import classes from "./Home.module.css";
import Footer from "../Footer/Footer";
import { paragraph1, paragraph2 } from "../../data";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={classes.background}>
        <div className={classes["outer-div"]}>
          <div className={classes["header-images"]}>
            <img
              className={classes["pang-photo"]}
              src="./images/adele1.jpeg"
              alt="pang1"
            />
            <img
              className={classes["pang-photo"]}
              src="./images/adele2.jpeg"
              alt="pang2"
            />
            <img
              className={classes["pang-photo"]}
              src="./images/adele3.jpeg"
              alt="pang3"
            />
          </div>

          <div className={classes["inner-header-wrapper"]}>
            <h1 className={classes["pang-moua"]}> Pang Moua</h1>
            <h2 className={classes.services}>
              Passionate and experienced Hmong, English, and ASL Interpreter
            </h2>
          </div>

          <Card
            className={classes["info-img-left-wrapper"]}
            header="Hmong Interpreter"
            info={paragraph1}
            src="./images/asl1.png"
          />
          <Card
            className={classes["info-img-right-wrapper"]}
            header="H Interpreter"
            info={paragraph1}
            src="./images/asl2.png"
          />
          <Card
            className={classes["info-img-left-wrapper"]}
            header="Hmong terpreter"
            info={paragraph1}
            src="./images/hmong1.png"
          />

          {/* <BackgroundLogo /><NavLink className={classes["learn-more"]} to="/portfolio">
                Learn More {">>"}
              </NavLink> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
