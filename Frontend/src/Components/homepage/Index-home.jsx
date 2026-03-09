import React, { useEffect } from "react";
import Hero2Section from "./hero2";
import HeroSection from "./hero";
import ArtistSlider from "./slider/Slider";
import CountDown from "./countdown/CountDown";
import Merchandise from "./merchandise/Merchandise";
import Stats from "./stats";
import SponsorSlider from "./currentSponser/SponsorSlider"; // Import the new component

const IndexHome = () => {

  return (
    <div
      className="flex flex-col select-none overflow-x-hidden items-center bg-black text-white"
    >
      <section className="relative w-full overflow-hidden"><HeroSection /></section>
      <section className="relative w-full overflow-hidden py-12"><SponsorSlider /></section> {/* Move the new component */}
      <section className="relative w-full overflow-hidden py-12"><Hero2Section /></section> 
      <section className="relative w-full overflow-hidden py-12"><CountDown /></section>
      {/* <ArtistSlider/> */}
      <section className="relative w-full overflow-hidden py-12"><Stats/></section>
      <section className="relative w-full overflow-hidden py-12"><ArtistSlider id="artists"/></section>
      <section className="relative w-full overflow-hidden py-12"><Merchandise/></section>
    </div>
  );
};

export default IndexHome;
