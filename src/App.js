import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

//components
import Hero from "./components/Hero";
import Legend from "./components/Legend";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Activities from "./components/Activities";
import GlobalStyle from "./globalstyles";
import Principles from "./components/Principles";
import Values from "./components/Values";
import Assignment from "./components/Assignment";
import Donate from "./components/Donate";
import Activity from "./components/Activity";
import Testimonial from "./components/Testimonal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <div style={{ scrollBehavior: "smooth" }}>
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Hero />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Legend />
        <Section />
        <Activities />
        <Principles />
        <Values />
        <Assignment />
        <Donate />
        <Activity />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
