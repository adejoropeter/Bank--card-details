import React from "react";
import Error from "./datecvc.component";
const DateCVC = ({
  setCvc,
  cvc,
  errorCvc,
  errorDate,
  setdatemth,
  setdateyr,
  datemth,
  dateyr,
  erroryr,
  errormth,
}) => {
  return (
    <div className="w-[100%] flex h-fit pt-6">
      <div className="w-[25%] mr-2 ">
        <label
          htmlFor="mm"
          className="text-[hsl(278,68%,11%)] font-semibold md:font-normal"
        >
          EXP. DATE
        </label>
        <input
          onChange={(e) => {
            setdatemth(e.target.value);
          }}
          type="number"
          id="mm"
          className="w-[100%] p-4 text-xl font-semibold rounded-lg mt-2 border-2 md:text-sm md:font-normal md:border-[1px] md:p-2"
          placeholder="MM"
        />
        <small ref={errormth} className="text-red-700"></small>
      </div>
      <div className="w-[25%] mr-2  ">
        <label
          htmlFor="yy"
          className="text-[hsl(278,68%,11%)] font-semibold leading-4"
        >
          (MM/YY)
        </label>
        <input
          onChange={(e) => {
            setdateyr(e.target.value);
          }}
          type="number"
          id="yy"
          className="w-[100%] p-4 text-xl rounded-lg font-semibold mt-2 border-2 md:text-sm md:font-normal md:border-[1px] md:p-2"
          placeholder="YY"
        />
        <small ref={erroryr} className="text-red-700"></small>
      </div>
      <div className="w-[50%]">
        <label
          htmlFor="cvc"
          className="text-[hsl(278,68%,11%)] font-semibold leading-4"
        >
          CVC
        </label>
        <input
          onChange={(e) => {
            setCvc(e.target.value);
          }}
          value={cvc}
          type="number"
          id="cvc"
          maxLength={"3"}
          className="w-[100%] p-4 text-xl rounded-lg font-semibold mt-2 border-2 md:text-sm md:font-normal md:border-[1px] md:p-2"
          placeholder="e.g. 123"
        />
        <small ref={errorCvc} className="text-red-700"></small>
      </div>
    </div>
  );
};

export default DateCVC;
