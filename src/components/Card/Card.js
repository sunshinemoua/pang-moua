import React from "react";
import BackgroundLogo from "../BackgroundLogo/BackgroundLogo";
import classes from "./Card.module.css";

const Card = ({ children, ...props }) => {
  let myClass = `${props.className}`;
  return (
    <div className={myClass} {...props}>
      {children}
      <BackgroundLogo />
      {/* {children} */}
    </div>
  );
};

export default Card;
