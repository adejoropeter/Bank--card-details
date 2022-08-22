import React, { useState, useRef } from "react";
import BUTTON from "./components/button.component";
import Card from "./components/card.component";
import DateCVC from "./components/datecvc.component";
import Input from "./components/input.component";
import Modal from "./components/modal.component";
function App() {
  const check = (name, length, ref) => {
    if (name.length > length || name.length < length) {
      ref.current.textContent = "error";
      errorCvc.current.style.color = "red";
    } else {
      ref.current.style.color = "green";
      ref.current.textContent = "done";
    }
  };
  const [string, setString] = useState("");
  const [num, setNum] = useState("");
  const [cvcNum, setCvcNum] = useState("");
  const [dateMth, setDateMth] = useState("");
  const [dateYr, setDateYr] = useState("");
  const inputName = useRef(null);
  const inputNumber = useRef(null);
  const errorText = useRef("");
  const errorNum = useRef("");
  const errorCvc = useRef("");
  const errorDate = useRef("");
  const erroryr = useRef("");
  const errormth = useRef("");
  const [cardNumber, setCardNumber] = useState("0000000000000000");
  const [cardName, setCardName] = useState("Adebayor Favour");
  const [cardCvc, setCardCvc] = useState("000");
  const [cardDateMth, setCardMth] = useState("02");
  const [cardDateYr, setCardYr] = useState("22");
  const [modal, setModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!string.length || string.includes("1")) {
      errorText.current.textContent = "error";
      errorText.current.style.color = "red";
    } else {
      errorText.current.style.color = "green";
      errorText.current.textContent = "done";
    }
    check(num, 16, errorNum);
    check(dateMth, 2, errormth);
    check(dateYr, 2, erroryr);
    check(cvcNum, 3, errorCvc);
    if (
      errorNum.current.textContent === "done" &&
      errorText.current.textContent === "done" &&
      errorCvc.current.textContent === "done" &&
      erroryr.current.textContent === "done" &&
      errormth.current.textContent === "done"
    ) {
      setCardNumber(num);
      setCardName(string);
      setModal(true);
      setCardCvc(cvcNum);
      setCardMth(dateMth);
      setCardYr(dateYr);
    } else {
      return;
    }
  };

  return (
    <div className=" w-[100vw] min-h-[100vh] flex flex-col md:flex-row md:h-[100vh]">
      <Card
        num={cardNumber}
        name={cardName}
        cvc={cardCvc}
        datemth={cardDateMth}
        dateyr={cardDateYr}
      />
      <div className="md:flex h-[70vh] w-[100%]   md:w-[60%] md:h-[100vh] md:justify-center md:items-center pt-[4rem] p-8 ">
        {modal && (
          <Modal
            modal={setModal}
            string={setCardName}
            num={setCardNumber}
            dateyr={setDateYr}
            datemth={setDateMth}
            cvcNum={setCvcNum}
          />
        )}
        {!modal && (
          <form
            className=" w-[100%] md:max-w-[20rem] mt-[2rem]  md:ml-14 "
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
            <DateCVC
              setCvc={setCvcNum}
              cvc={cvcNum}
              errorCvc={errorCvc}
              errorDate={errorDate}
              datemth={dateMth}
              dateyr={dateYr}
              setdatemth={setDateMth}
              setdateyr={setDateYr}
              errormth={errormth}
              erroryr={erroryr}
            />
            <BUTTON>Confirm</BUTTON>
          </form>
        )}
      </div>
    </div>
  );
}
export default App;
