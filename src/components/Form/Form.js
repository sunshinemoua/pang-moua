import React, { useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Header from "../Header/Header";
import classes from "./Form.module.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [from_name, setFromName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();

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
          alert("message sent successfully");
          setFromName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Card className={classes.background}>
        <div className={classes["form-outer-wrapper"]}>
          <Header className={classes.header} header={"Get in Touch With Me"} />
          <form className={classes["form-inner-wrapper"]} onSubmit={sendEmail}>
            <span className={classes["full-name-email-row"]}>
              <input
                className={classes["input-name"]}
                placeholder="Full Name"
                type="text"
                name="name"
                value={from_name}
                onChange={(event) => setFromName(event.target.value)}
              />
              <input
                className={classes["input-email"]}
                placeholder="Email"
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </span>
            <textarea
              className={classes["input-message"]}
              placeholder="Message..."
              type="text"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />

            <span className={classes.button}>
              <Button className={classes.sendButton} type="submit">
                Send
              </Button>
            </span>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Form;
