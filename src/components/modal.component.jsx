import React from "react";
import BUTTON from "./button.component";
import {ReactComponent as icon } from "../icon-complete.svg";
const Modal = ({ modal, string, num }) => {
  return (
    <div
      className="flex flex-col"
      onDoubleClick={() => {
        modal(false);
        num("0000 0000 0000 0000");
        string("ADEJORO PETER");
      }}
    >
      <div>
        <img src={icon} alt="complete icon"/>
      </div>
      <BUTTON>Continue</BUTTON>
    </div>
  );
};

export default Modal;
