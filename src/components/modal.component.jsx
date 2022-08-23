import React from "react";
import BUTTON from "./button.component";
import CompletedImage from "./istockphoto-1341550573-612x612.jpg";
const Modal = ({ modal, string, num, dateyr, datemth, cvcNum }) => {
  return (
    <div className=" w-[100%] md:max-w-[20rem] mt-[2rem]  md:ml-14 ">
      <div
        onClick={() => {
          modal(false);
          num("0000000000000000");
          string("ADEBAYOR FAVOUR");
          datemth("00");
          dateyr("00");
          cvcNum("123");
        }}
        className="text-black cursor-pointer"
      >
        Back
      </div>
      <div className=" h-[50vh] flex flex-col justify-between items-center">
        <div className="bg-purple-700 h-fit w-fit p-10 rounded-full mb-4">
          <img src={CompletedImage} className="w-24 h-24 rounded-full" />
        </div>
        <div>
          <h1 className="text-[hsl(278, 68%, 11%)] text-[2rem] font-bold text-center tracking-widest">
            THANK YOU!
          </h1>
          <p className="text-[hsl(279, 6%, 55%)] text-xl tracking-wider">
            We've added your card details
          </p>
        </div>
        <BUTTON>Continue</BUTTON>
      </div>
    </div>
  );
};

export default Modal;
