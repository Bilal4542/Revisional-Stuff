import React from "react";
import secHero from "../assets/SecHero.png";

const SecHero = () => {
  return (
    <div className="my-10">
      <div className="relative">
        <img src={secHero} alt="" />
      </div>
      <div className="absolute top-[2300px] left-[100px]">
        <h1 className="text-[28px] font-bold uppercase text-[rgba(255,191,61,1)] mb-8 leading-8">
          Experience the best with our Premium <br /> Quality Collections—crafted fort <br />
          hose who seek excellence.
        </h1>
        <button className="bg-[rgba(255,191,61,1)] text-white px-32 py-4 rounded-4xl font-bold uppercase text-[16px] cursor-pointer hover:bg-[#f9b52c] transition-all ease-in-out duration-300">Shop Now</button>
      </div>
    </div>
  );
};

export default SecHero;
