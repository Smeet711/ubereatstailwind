import React from "react";
import Cards from "./Cards";

const HeroSectioncards = () => {
  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        <Cards />
      </div>
    </>
  );
};

export default HeroSectioncards;
