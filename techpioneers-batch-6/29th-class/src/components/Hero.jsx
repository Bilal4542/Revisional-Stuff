import React from "react";
import home from "../assets/home.png";

const Hero = () => {
  return (
    <div className="absolute top-0">
      <div className="">
        <img src={home} alt="" />
      </div>
      <div className="absolute top-16">
        <h1 className="text-5xl font-bold uppercase text-white">
          <span className="text-[rgba(255,191,61,1)]">Unlock 20% off</span> <br /> on our Premium Collection <br /> for a limited time only
        </h1>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
