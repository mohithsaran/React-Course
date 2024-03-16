import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("");
  let [result, setResult] = useState(0);
  const handler = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="Calculator">
      <center>
        <input
          type="text"
          name="input"
          value={value}
          onChange={handler}
        ></input>
        <br />
        <button onClick={() => setResult(eval(value))}>Result</button>
        <h4>Result:{result}</h4>
      </center>

      <div className="input">
        <button onClick={() => setValue(value + "1")}>1</button>
        <button onClick={() => setValue(value + "2")}>2</button>
        <button onClick={() => setValue(value + "3")}>3</button>
        <button onClick={() => setValue(value + "4")}>4</button>
        <button onClick={() => setValue(value + "5")}>5</button>
        <button onClick={() => setValue(value + "6")}>6</button>
        <button onClick={() => setValue(value + "7")}>7</button>
        <button onClick={() => setValue(value + "8")}>8</button>
        <button onClick={() => setValue(value + "9")}>9</button>
        <button onClick={() => setValue(value + "0")}>0</button>
      </div>
      <div className="operator">
        <button
          onClick={() => {
            setValue(value + "+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setValue(value + "-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setValue(value + "*");
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            setValue(value + "/");
          }}
        >
          /
        </button>
        <button onClick={() => setValue("")}>clr</button>
      </div>
    </div>
  );
};

export default Calculator;
