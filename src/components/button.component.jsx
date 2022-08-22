import React from "react";

const BUTTON = ({ children, hover }) => {
  return (
    <button
      className={`bg-[hsl(247,68%,11%)] w-[100%] rounded-lg p-4 mt-10 mb-5 flex justify-center items-center font-semibold text-[hsl(0,0%,100%)] text-lg tracking-wider ${
        hover ? "group" : null
      }`}
    >
      <span className="group hover:text-black">{children}</span>
    </button>
  );
};

export default BUTTON;
