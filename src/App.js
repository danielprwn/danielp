import React from "react";
import "./app.css";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Extension from "./components/extension/Extension";
import Questions from "./components/questions/Questions";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Extension />
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
