import React from "react";

const Card = (props) => {
  return (
    <div className="">
      <div className="flex items-center justify-center p-6">
        <div className="max-w-sm w-full rounded-2xl border border-gray-400 shadow p-5">
          {/* Image */}
          <div className="rounded-xl overflow-hidden mb-5">
            <img
              src={props.img}
              alt="Workspace"
              className="w-full object-cover"
            />
          </div>

          {/* Content */}
          <h3 className="text-2xl font-bold leading-snug">
            {props.title}
          </h3>

          {/* Button */}
          <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-600 cursor-pointer hover:bg-green-700 ease-in-out duration-300 px-4 py-2 font-medium  transition">
            Edit <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
