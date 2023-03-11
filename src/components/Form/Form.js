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
    <div>
      <Card className={classes.background}>
        <div className={classes["form-outer-wrapper"]}>
          <Header header={"Get in Touch With Me"} />
          <form
            className={classes["form-inner-wrapper"]}
            onSubmit={handleSubmit}
          >
            <span className={classes["full-name-email-row"]}>
              <span className={classes["full-name-error"]}>
                <input
                  className={classes["input-name"]}
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  value={from_name}
                  onChange={(event) => setFromName(event.target.value)}
                />
                {!from_name && clicked && (
                  <span className={classes.error}>Please enter a name</span>
                )}
              </span>
              <span className={classes["email-error"]}>
                <input
                  className={classes["input-email"]}
                  placeholder="Email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                {!email && clicked && (
                  <span className={classes.error}>Please enter an email</span>
                )}
              </span>
            </span>
            <span className={classes["message-error"]}>
              <textarea
                className={classes["input-message"]}
                placeholder="Message..."
                type="text"
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              {!message && clicked && (
                <span className={classes.error}>Please enter a message</span>
              )}
            </span>

            <span className={classes.button}>
              <button type="submit">Send</button>
            </span>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Form;
