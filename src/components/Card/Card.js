import React from "react";
import "./Card.module.css";

const Card = ({ children, ...props }) => {
  let myClass = `${props.className}`;
  return (
    <div className={myClass} {...props}>
      {children}
    </div>
  );
};

export default Card;
