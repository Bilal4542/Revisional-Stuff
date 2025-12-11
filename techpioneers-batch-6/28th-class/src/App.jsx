import react from "react";
import img1 from './assets/image1.png'
import img2 from './assets/image2.png'
import img3 from './assets/image3.png'
import img4 from './assets/image4.png'

function App() {
  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-10 w-[90%]">
          <div className="">
            <div className="bg-[rgba(47,47,47,0.1)] h-80 flex items-center justify-center rounded-4xl">
              <img src={img1} alt="" />
            </div>
            <div className="">
              <p className="uppercase p-1 text-[14px] font-semibold">Denim Peshawari Chappal (NDL x KP Shop Collaboration)</p>
            </div>
            <div className="flex items-center justify-between px-1">
              <p className="font-semibold"><span className="text-gray-400 decoration-red-500 decoration-2 line-through">5000</span> <span className="font-bold">4500</span></p>
              <p><span className="font-bold">⭐ 4.9</span> <span className="text-sm">(23)</span></p>
            </div>
          </div>
          <div className="">
            <div className="bg-[rgba(47,47,47,0.1)] h-80 flex items-center justify-center rounded-4xl">
              <img src={img2} alt="" />
            </div>
            <div className="">
              <p className="uppercase p-1 text-[14px] font-semibold">Denim Peshawari Chappal (NDL x KP Shop Collaboration)</p>
            </div>
            <div className="flex items-center justify-between px-1">
              <p className="font-semibold"><span className="text-gray-400 decoration-red-500 decoration-2 line-through">5000</span> <span className="font-bold">4500</span></p>
              <p><span className="font-bold">⭐ 4.9</span> <span className="text-sm">(23)</span></p>
            </div>
          </div>
          <div className="">
            <div className="bg-[rgba(47,47,47,0.1)] h-80 flex items-center justify-center rounded-4xl">
              <img src={img3} alt="" />
            </div>
            <div className="">
              <p className="uppercase p-1 text-[14px] font-semibold">Denim Peshawari Chappal (NDL x KP Shop Collaboration)</p>
            </div>
            <div className="flex items-center justify-between px-1">
              <p className="font-semibold"><span className="text-gray-400 decoration-red-500 decoration-2 line-through">5000</span> <span className="font-bold">4500</span></p>
              <p><span className="font-bold">⭐ 4.9</span> <span className="text-sm">(23)</span></p>
            </div>
          </div>
          <div className="">
            <div className="bg-[rgba(47,47,47,0.1)] h-80 flex items-center justify-center rounded-4xl">
              <img src={img4} alt="" />
            </div>
            <div className="">
              <p className="uppercase p-1 text-[14px] font-semibold">Denim Peshawari Chappal (NDL x KP Shop Collaboration)</p>
            </div>
            <div className="flex items-center justify-between px-1">
              <p className="font-semibold"><span className="text-gray-400 decoration-red-500 decoration-2 line-through">5000</span> <span className="font-bold">4500</span></p>
              <p><span className="font-bold">⭐ 4.9</span> <span className="text-sm">(23)</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
