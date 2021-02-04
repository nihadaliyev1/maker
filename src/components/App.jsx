import React from "react";
import Header from "./Header";
import Intro from "./Intro";
import Features from "./Features";
import Pricing from "../components/Pricing";
import Contact from "./Contact";
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Intro />
      <Features />
      <Pricing />
      <Contact />
    </React.Fragment>
  );
};

export default App;
