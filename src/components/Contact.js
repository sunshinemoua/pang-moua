import React from "react";
import Navbar from "../Navbar";
import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className={classes["form-outer-wrapper"]}>
        <span className={classes.title}>Get in Touch with Me</span>
        <form className={classes["form-inner-wrapper"]}>
          <span className={classes["full-name-email-row"]}>
            <input
              className={classes["input-name"]}
              placeholder="Full Name"
              type="text"
              name="name"
            />
            <input
              className={classes["input-email"]}
              placeholder="Email"
              type="email"
              id="email"
            />
          </span>
          <input
            className={classes["input-message"]}
            placeholder="Message..."
            type="text"
            name="message"
          />

          <span className={classes.button}>
            <button> Send </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
