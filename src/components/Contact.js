import React from "react";
import Navbar from "../Navbar";
import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className={classes["form-outer-wrapper"]}>
        Contact Me
        <form className={classes["form-inner-wrapper"]}>
          <input
            className={classes["input-title"]}
            placeholder="First Name"
            type="text"
            name="name"
          />

          <input
            className={classes["input-title"]}
            placeholder="Last Name"
            type="text"
            name="name"
          />

          <input
            className={classes["input-title"]}
            placeholder="Email"
            type="email"
            id="email"
          />

          <input
            className={classes["input-title"]}
            placeholder="Message"
            type="text"
            name="message"
          />

          <button className={classes.button}> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
