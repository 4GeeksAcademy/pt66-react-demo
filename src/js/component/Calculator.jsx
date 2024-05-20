import React, { act, useState } from "react";
import "./Calculator.css";

const CalcButton = ({ value = "X", onClick, extraClasses }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`btn btn-primary ${extraClasses || ""}`}
      >
        {value}
      </button>
    </>
  );
};

const CalcDisplay = ({ register, op, display }) => {
  return (
    <>
      <div className="display">
        <div className="register">
          {register} {op}
        </div>
        <div className="active">{display}</div>
      </div>
    </>
  );
};

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [active, setActive] = useState(0);
  const [op, setOp] = useState(null);
  const [register, setRegister] = useState(null);

  const input = (value) => {
    if (display === "0" && value === ".") {
      setDisplay(display + value);
    } else if (display !== "0") {
      setDisplay(display + value);
    } else if (display === "0") {
      setDisplay(value);
    }
  };

  const resetCalc = () => {
    setDisplay("0");
    setActive(0);
    setOp(null);
    setRegister(null);
  };

  return (
    <>
      <div className="calculator">
        <CalcDisplay register={register} display={display} op={op} />
        <div className="calculator-body">
          <CalcButton value="+" />
          <CalcButton value="-" />
          <CalcButton value="×" />
          <CalcButton value="÷" />
          <CalcButton value="7" onClick={() => input("7")} />
          <CalcButton value="8" onClick={() => input("8")} />
          <CalcButton value="9" onClick={() => input("9")} />
          <CalcButton value="AC" onClick={resetCalc} />
          <CalcButton value="4" onClick={() => input("4")} />
          <CalcButton value="5" onClick={() => input("5")} />
          <CalcButton value="6" onClick={() => input("6")} />
          <CalcButton value="1" onClick={() => input("1")} />
          <CalcButton value="2" onClick={() => input("2")} />
          <CalcButton value="3" onClick={() => input("3")} />
          <CalcButton value="." onClick={() => input(".")} />
          <CalcButton
            value="0"
            onClick={() => input("0")}
            extraClasses="zero"
          />
          <CalcButton value="=" extraClasses="equals" />
        </div>
      </div>
    </>
  );
};

export default Calculator;
