import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Project";
// import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimony from "./components/Testimony";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <Project/>
      <Testimony/>
      <Contact/>
      
      <Footer />
    </div>
  );
};

export default App;
