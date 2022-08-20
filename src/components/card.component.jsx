import React from "react";

const Card = ({ num, name }) => {
  const fstFour = num.split("").slice(0, 4).join("");
  const secFour = num.split("").slice(4, 8).join("");
  const trdFour = num.split("").slice(8, 12).join("");
  const fthFour = num.split("").slice(12, 16).join("");
  return (
    <div className="h-[40vh] w-[100%] bg-[hsl(278,68%,11%)] flex md:h-[100vh] md:w-[35%] flex-col items-end justify-center relative p-6">
      <div className="w-[18rem] h-[10rem] bg-white mt-3 rounded-md overflow-hidden flex flex-col items-center md:absolute md:left-[16rem] md:bottom-[10rem] md:bg-gray-500">
        <div className="w-[100%] h-10 bg-[hsl(280,2%,24%)] mt-5"></div>
        <div className="w-[15rem] h-8 flex justify-end items-center bg-[hsl(268,16%,79%)] rounded-md mt-3 p-3">
          <span className="text-white">000</span>
        </div>
      </div>
      <div
        className="
      w-[18rem] 
      h-[10rem]
        absolute top-[9.5rem] left-4 rounded-md flex flex-col justify-between p-[1rem] bg-pink-500 md:top-[4rem] md:left-[14rem]
        "
      >
        <div className="flex items-center">
          <div className="h-[2rem] w-[2rem] bg-[hsl(0,0%,100%)] rounded-full mr-[0.5rem]"></div>
          <div className="h-[0.8rem] w-[0.8rem] border-[1px] rounded-full bg-white bg-opacity-0"></div>
        </div>
        <div className="flex flex-col h-[50%] w-[100%] justify-between ">
          <div className="font-semibold text-xl text-[hsl(0,0%,100%)] tracking-widest flex">
            <p className="pr-2">{fstFour}</p>
            <p className="pr-2">{secFour}</p>
            <p className="pr-2">{trdFour}</p>
            <p>{fthFour}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-[hsl(0,0%,100%)] uppercase tracking-widest font-medium">
              {name}
            </p>
            <p className="text-[hsl(0,0%,100%)] font-normal text-sm">02/00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// - White: hsl(0, 0%, 100%)
// - Light grayish violet: hsl(270, 3%, 87%)
// - Dark grayish violet: hsl(279, 6%, 55%)
// - Very dark violet: hsl(278, 68%, 11%)

// - Linear gradient (active input border):

// hsl(249, 99 %, 64 %) to hsl(278, 94 %, 30 %)
// - Red (input errors): hsl(0, 100%, 66%)
