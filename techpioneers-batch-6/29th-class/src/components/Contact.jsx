import React from "react";
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import tiktok from '../assets/tiktok.png'
import youtube from '../assets/youtube.png'

const Contact = () => {
  return (
    <div className="flex items-center justify-center mt-10 mb-28">
      <div className="flex flex-col items-center justify-center w-[90%]">
        <h1 className="text-4xl text-[rgba(51,55,64,1)] font-bold uppercase my-10">Get in Touch with Us</h1>
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-8">
            <a href=""><img src={fb} alt="" /></a>
            <a href=""><img src={insta} alt="" /></a>
            <a href=""><img src={tiktok} alt="" /></a>
            <a href=""><img src={youtube} alt="" /></a>
            </div>
             <div className="">
            <form className="flex items-center gap-3">
                <input className="border  border-[rgba(0,0,0,1)] w-[480px] rounded-full p-2 outline-none" type="email" placeholder="Enter Your Email Address" />
                <button className="bg-[rgba(255,191,61,1)] text-white px-12 py-[11px] rounded-4xl font-bold uppercase text-[16px] cursor-pointer hover:bg-[#f9b52c] transition-all ease-in-out duration-300 w-fit">Submit</button>
            </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
