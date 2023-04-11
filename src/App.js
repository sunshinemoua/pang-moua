import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import classes from "./App.module.css";
import Services from "./components/Services/Services";
import InPerson from "./components/Services/InPerson";
import HmongServices from "./components/Services/HmongServices";
import ASLServices from "./components/Services/ASLServices";
import Remote from "./components/Services/Remote";

const App = () => {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services/in-person" element={<InPerson />} />
          <Route path="/services/remote" element={<Remote />} />
          <Route path="/services/hmong-services" element={<HmongServices />} />
          <Route path="/services/ASL-services" element={<ASLServices />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
