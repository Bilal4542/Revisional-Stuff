import React from "react";
import home from "../assets/home.png";

const Hero = () => {
  return (
    <div className="">
      <div className="absolute top-0">
        <img src={home} alt="" />
      </div>
      <div className="absolute top-[228px] left-[75px] gap-10">
        <h1 className="text-4xl font-bold uppercase text-white mb-8">
          <span className="text-[rgba(255,191,61,1)]">Unlock 20% off</span> <br /> on our Premium Collection <br /> for a limited time only
        </h1>
        <button className="bg-[rgba(255,191,61,1)] text-white px-32 py-4 rounded-4xl font-bold uppercase text-[16px] cursor-pointer hover:bg-[#f9b52c] transition-all ease-in-out duration-300">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
