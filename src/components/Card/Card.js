import React from "react";
import classes from "../Home/Home.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ className, header, info, src, toLink }) => {
  return (
    <div className={className}>
      <img className={classes.photo} src={src} alt="hmong1" />
      <div className={classes["text-info"]}>
        <h2>{header}</h2>
        <span>{info}</span>
        {toLink !== "" && (
          <NavLink className={classes["learn-more"]} to={toLink}>
            Learn More
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Card;
