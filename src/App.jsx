import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Introduction from "./Components/Introduction";
import Nav from './Components/Nav';
import About from "./Components/About";
import Journey from "./Components/Journey";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Certification from "./Components/Certification";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App(){
  AOS.init(
    { duration: 1200 }
  );
  return(
    <>
      <Nav />
      <section id="intro"><Introduction /></section>
      <section id="about"><About /></section>
      <section id="journey"><Journey /></section>
      <section id="skills"><Skill /></section>
      <section id="projects"><Project /></section>
      <section id="certification"><Certification /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default App;
