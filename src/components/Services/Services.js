import React, { useState } from "react";
import NavBar from "../Navbar/Navbar";
import InPerson from "./InPerson";
import Remote from "./Remote";
import HmongServices from "./HmongServices";
import ASLServices from "./ASLServices";

const Services = () => {
  return (
    <div>
      <NavBar />
      Services PAGES TESTING
      <InPerson />
      <Remote />
      <HmongServices />
      <ASLServices />
    </div>
  );
};

export default Services;
