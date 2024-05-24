import React, { useEffect, useState } from "react";
import "./Calculator.css";

const CalcTape = ({ tape, onDelete }) => {
  return (
    <>
      <div className="mt-2">
        <button className="btn btn-danger" onClick={onDelete}>
          <i class="fa-solid fa-dumpster-fire"></i>
        </button>
        <ul className="tape">
          {tape.map((item, idx) => (
            <li key={idx}>
              <div className="display">
                <div className="register">
                  {item.register}
                  &nbsp;{item.op}
                  &nbsp;{item.active}
                </div>
                <div className="active">{item.result}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

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
          {register}&nbsp;{op}
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
  const [tape, setTape] = useState([]);

  /**
   * KNOWN BUG:
   * If you type in a number after completing
   * an operation, instead of replacing the number
   * the calculator appends the newly input number
   * to the end of the output of the previous op.
   */
  const input = (value) => {
    if (display.includes(".") && value === ".") {
      return;
    } else if (display === "0" && value === ".") {
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

  const togglePositive = () => {
    setDisplay((active * -1).toString());
  };

  const startOp = (op) => {
    setOp(op);
    setRegister(active);
    setDisplay("0");
  };

  const handleDelete = () => {
    setTape([]);
  };

  const addToTape = (active, register, op, result) => {
    setTape([
      {
        active,
        register,
        op,
        result,
      },
      ...tape,
    ]);
  };

  const calculate = () => {
    let result = null;
    if (op === "+") {
      result = active + register;
    } else if (op === "-") {
      result = active - register;
    } else if (op === "×") {
      result = active * register;
    } else if (op === "÷") {
      result = register / active;
    }

    addToTape(active, register, op, result);
    setDisplay(result.toString());
    setOp(null);
    setRegister(null);
  };

  useEffect(() => {
    setActive(parseFloat(display));
  }, [display]);

  return (
    <>
      <div className="calculator">
        <CalcDisplay register={register} display={display} op={op} />
        <div className="calculator-body">
          <CalcButton value="+" onClick={() => startOp("+")} />
          <CalcButton value="-" onClick={() => startOp("-")} />
          <CalcButton value="×" onClick={() => startOp("×")} />
          <CalcButton value="÷" onClick={() => startOp("÷")} />
          <CalcButton value="7" onClick={() => input("7")} />
          <CalcButton value="8" onClick={() => input("8")} />
          <CalcButton value="9" onClick={() => input("9")} />
          <CalcButton value="AC" onClick={resetCalc} />
          <CalcButton value="4" onClick={() => input("4")} />
          <CalcButton value="5" onClick={() => input("5")} />
          <CalcButton value="6" onClick={() => input("6")} />
          <CalcButton value="±" onClick={togglePositive} />
          <CalcButton value="1" onClick={() => input("1")} />
          <CalcButton value="2" onClick={() => input("2")} />
          <CalcButton value="3" onClick={() => input("3")} />
          <CalcButton value="." onClick={() => input(".")} />
          <CalcButton
            value="0"
            onClick={() => input("0")}
            extraClasses="zero"
          />
          <CalcButton value="=" onClick={calculate} extraClasses="equals" />
        </div>
        <CalcTape tape={tape} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default Calculator;
