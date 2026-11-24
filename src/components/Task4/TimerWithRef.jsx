import {useRef, useState } from "react";

export default function TimerWithRef() {
  const [seconds, setSeconds] = useState(0);
  const intervalIDRef = useRef(null);

  function handleStart() {
    if (intervalIDRef.current !== null) return;
    intervalIDRef.current = setInterval(() => {
      setSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalIDRef.current);
    intervalIDRef.current = null;
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
