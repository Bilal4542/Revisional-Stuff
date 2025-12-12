import React from "react";
import customer1 from "../assets/customer1.png";
import customer2 from "../assets/customer2.png";
import customer3 from "../assets/customer3.png";
import yellowStar from "../assets/yellowStar.png";
import grayStar from "../assets/grayStar.png";
const CustomerReviews = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[rgba(255,191,61,0.05)] py-20">
      <h1 className="text-center text-4xl uppercase font-bold py-10">
        Customer Reviews
      </h1>
      <div className="w-[90%] grid grid-cols-3 items-center justify-items-center gap-8">
        <div className="shadow h-56 rounded-[40px] p-6">
          <div className="flex items-center gap-3">
            <img src={customer1} alt="" />
            <div className="flex flex-col gap-1">
              <h3 className="text-[16px] font-bold uppercase">Ali Khan</h3>
              <div className="flex gap-1">
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
              </div>
            </div>
          </div>
          <p className="font-semibold mt-3 text-[14px]">
            "I wasn’t expecting much, but this product went above and beyond
            what I imagined. The quality and performance are outstanding! It
            exceeded my expectations in every way."
          </p>
        </div>
        <div className="shadow h-56 rounded-[40px] p-6">
          <div className="flex items-center gap-3">
            <img src={customer2} alt="" />
            <div className="flex flex-col gap-1">
              <h3 className="text-[16px] font-bold uppercase">Alishba</h3>
              <div className="flex gap-1">
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={grayStar} alt="" />
              </div>
            </div>
          </div>
          <p className="font-semibold mt-3 text-[14px]">
            This product is simply amazing. The quality and performance far
            surpassed what I anticipated. It’s worth every penny! Will
            definitely recommend it to others.
          </p>
        </div>
        <div className="shadow h-56 rounded-[40px] p-6">
          <div className="flex items-center gap-3">
            <img src={customer3} alt="" />
            <div className="flex flex-col gap-1">
              <h3 className="text-[16px] font-bold uppercase">Ali Khan</h3>
              <div className="flex gap-1">
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
              </div>
            </div>
          </div>
          <p className="font-semibold mt-3 text-[14px]">
            "I’ve used many similar products before, but none have impressed me
            like this one. It works even better than advertised and has far
            surpassed my expectations!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
