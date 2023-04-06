import React, { useState } from "react";
import Card from "../Card/Card";
import Header from "../Header/Header";
import classes from "./Form.module.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [from_name, setFromName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [clicked, setClicked] = useState(false);

  const sendEmail = () => {
    const templateParams = {
      to_name: "Sunshine",
      from_name,
      email,
      message,
    };

    emailjs
      .send(
        "service_mqe0nzl",
        "template_1rr5shh",
        templateParams,
        "lUMgPTyIvEO00vuro"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for your message!");
          setFromName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (from_name && email && message) {
      sendEmail();
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  return (
    <div className={classes.background}>
      <div className={classes["outer-div"]}>
        <Header header={"Get in Touch With Me"} />
        <form className={classes.wrapper} onSubmit={handleSubmit}>
          <div className={classes["inner-wrapper"]}>
            <div className={classes["full-name-email"]}>
              <div className={classes["input-one"]}>
                <input
                  className={classes["input-two"]}
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  value={from_name}
                  onChange={(event) => setFromName(event.target.value)}
                />
                {!from_name && clicked && (
                  <span className={classes.error}>Please enter a name</span>
                )}
              </div>
              <div className={classes["input-one"]}>
                <input
                  className={classes["input-two"]}
                  placeholder="Email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                {!email && clicked && (
                  <span className={classes.error}>Please enter an email</span>
                )}
              </div>
            </div>
            <div className={classes.message}>
              <textarea
                className={classes["input-two"]}
                placeholder="Message..."
                type="text"
                name="message"
                value={message}
                rows="15"
                onChange={(event) => setMessage(event.target.value)}
              />
              {!message && clicked && (
                <span className={classes.error}>Please enter a message</span>
              )}
              <div className={classes.button}>
                <button type="submit">Send</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
