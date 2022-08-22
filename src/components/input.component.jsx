import React from "react";

const Input = ({
  type,
  id,
  label,
  placeholder,
  name,
  selectedInput,
  setSelectedInput,
  input,
  error,
}) => {
  return (
    <div className="flex flex-col w-[100%] md:w-full ">
      <div className="flex flex-col w-[100%] pt-4 md:w-[100%]">
        <label
          htmlFor={id}
          className="font-semibold text-lg text-[hsl(278,68%,11%)] mb-3 tracking-wide md:text-sm md:mb-1"
        >
          {" "}
          {label}
        </label>
        <input
          onChange={(e) => {
            setSelectedInput(e.target.value);
          }}
          ref={input}
          value={selectedInput}
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          className="w-[100%] h-[3rem] rounded-md border-[2px] border-gray-400 p-4 font-semibold text-xl tracking-wider md:w-[100%] md:text-sm md:h-[2rem]"
        />

        <h1 className="text-red-600" ref={error}>
        
        </h1>
      </div>
    </div>
  );
};

export default Input;
