import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  const submit = () => {
    console.log(startTime);
    fetch("http://10.2.10.51:3001/addHour", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        startTime: startTime,
        endTime: endTime,
        breakTime: breakTime,
      }),
      mode: "cors",
    });
  };

  return (
    <div className="App">
      <div className="title">Work Hours Entry</div>

      <form className="container">
        <div className="input begin">
          <label htmlFor="input-start">Start time</label>
          <input
            id="input-start"
            type="time"
            onChange={(e) => {
              setStartTime(e.target.value);
            }}
          />
        </div>

        <div className="input end">
          <label htmlFor="input-finish">End time</label>
          <input
            id="input-finish"
            type="time"
            onChange={(e) => {
              setEndTime(e.target.value);
            }}
          />
        </div>

        <div className="input break">
          <label htmlFor="input-break">Break (min)</label>
          <input
            id="input-break"
            type="number"
            onChange={(e) => {
              setBreakTime(e.target.value);
            }}
          />
        </div>
        <button type="submit" onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
