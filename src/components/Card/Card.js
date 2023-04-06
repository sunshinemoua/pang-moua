import React from "react";
import classes from "../Home/Home.module.css";

const Card = ({ className, header, info, src }) => {
  return (
    <div className={className}>
      <img className={classes["photo"]} src={src} alt="hmong1" />
      <div className={classes["text-info"]}>
        <h2>{header}</h2>
        <span>{info}</span>
      </div>
    </div>
  );
};

export default Card;
