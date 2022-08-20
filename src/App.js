import React, { useState, useRef } from "react";
import BUTTON from "./components/button.component";
import Card from "./components/card.component";
import Input from "./components/input.component";
import Modal from "./components/modal.component";
function App() {
  const [string, setString] = useState("");
  const [num, setNum] = useState("");
  const inputName = useRef(null);
  const inputNumber = useRef(null);
  const errorText = useRef("");
  const errorNum = useRef("");
  const [cardNumber, setCardNumber] = useState("0000000000000000");
  const [cardName, setCardName] = useState("Adebayor Favour");
  const [modal, setModal] = useState(false);
  // // errorText.current.style.display = "none";
  // // errorNum.current.style.display = "none";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!string.length || string.includes("1")) {
      errorText.current.style.display = "block";
      errorText.current.textContent = "error";
      errorText.current.style.color = "red";
    } else {
      errorText.current.style.display = "block";
      errorText.current.style.color = "green";
      errorText.current.textContent = "done";
    }
    if (num.length > 16 || num.length < 16) {
      errorNum.current.style.display = "block";
      errorNum.current.textContent = "error";
      errorNum.current.style.color = "red";
    } else {
      errorNum.current.style.display = "block";
      errorNum.current.style.color = "green";
      errorNum.current.textContent = "done";
    }
    if (
      errorNum.current.textContent === "done" &&
      errorText.current.textContent === "done"
    ) {
      setCardNumber(num);
      setCardName(string);
      setModal(true);
    } else {
      return;
    }
  };
  return (
    <div className=" w-[100vw] min-h-[100vh] flex flex-col pb-2 md:flex-row md:h-[100vh]">
      <Card num={cardNumber} name={cardName} />
      <div className="md:flex h-[70vh] w-[100%]   md:w-[60%] md:h-[100vh] md:justify-center md:items-center">
        {modal && (
          <Modal modal={setModal} string={setCardName} num={setCardNumber} />
        )}
        {!modal && (
          <form
            className="h-[70vh] w-[100%] md:max-w-[20rem]  "
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <Input
                id={"name"}
                type={"text"}
                label={"CARDHOLDER NAME"}
                placeholder="e.g. Adejoro Peter "
                selectedInput={string}
                setSelectedInput={setString}
                name="cardname"
                input={inputName}
                error={errorText}
              />
              <Input
                id={"number"}
                type={"number"}
                label={"CARD NUMBER"}
                placeholder="e.g 1234 5678 9123 0000"
                name="cardnumber"
                selectedInput={num}
                setSelectedInput={setNum}
                input={inputNumber}
                error={errorNum}
              />
            </div>
            <BUTTON hover>Confirm</BUTTON>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
// - White: hsl(0, 0%, 100%)
// - Light grayish violet: hsl(270, 3%, 87%)
// - Dark grayish violet: hsl(279, 6%, 55%)
// - Very dark violet: hsl(278, 68%, 11%)

// - Linear gradient (active input border): hsl(249, 99%, 64%) to hsl(278, 94%, 30%)
// - Red (input errors): hsl(0, 100%, 66%)
