import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HeroSectioncards from "./components/HeroSectioncards";
import Food from "./components/Food";
import Category from "./components/Category";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroSectioncards />
      <Food />
      <Category />
    </>
  );
};

export default App;
