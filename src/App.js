import React, { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState();

  const guageElement = document.querySelector(".guage");
  function setGuageValue(guage, value) {
    console.log("function triggered", val);

    if (value < 0.6 || value > 1.4) {
      return;
    }

    return (guage.querySelector(".guage__fill").style.transform = `rotate(${
      value / 2
    }turn)`);
  }

  return (
    <div className="main">
      <div className="guage">
        <div className="guage__body">
          <div className="guage__fill"></div>
          <div className="guage__cover"></div>
          <div className="conver__two"></div>
        </div>
        <input
          type="number"
          style={{ width: "12rem" }}
          placeholder="Enter Value"
          onChange={(e) => setVal(e.target.value)}
        ></input>
        <button onClick={() => setGuageValue(guageElement, val)}>Submit</button>
        <h5>Set Gauge Value between 0.6-1.4</h5>
      </div>
    </div>
  );
}

export default App;
