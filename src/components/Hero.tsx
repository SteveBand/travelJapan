import React from "react";

interface Props {}

const Hero = ({}: Props) => {
  return (
    <section className="hero w-full h-full flex">
      <div className="flex-1 w-15 h-full">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="flex-[3_3_0%] w-85 h-full items-center">
        <h1 className="hero_title">JAPAN</h1>
      </div>
    </section>
  );
};

export default Hero;
