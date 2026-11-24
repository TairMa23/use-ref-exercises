import {useState } from "react";

export default function TimerWithState() {
  const [seconds, setSeconds] = useState(0);
  const [intervalID,setIntervalID] = useState(null);

  function handleStart() {
    if (intervalID !== null) return;
    setIntervalID(setInterval(() => {
      setSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000));
  }

  function handleStop() {
    clearInterval(intervalID);
    setIntervalID(null)
  }


  return (
    <div>
      <label>{`Seconds: ${seconds}`}</label>
      <button type="button" onClick={handleStart}>
        Start
      </button>
      <button type="button" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
}
