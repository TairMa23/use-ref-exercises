import { useRef, useState } from "react";

export default function CounterHistory() {
  const [count, setCount] = useState(0);
  const PreviousCountRef = useRef(count);
  function Change(value) {
    PreviousCountRef.current = count;
    setCount(value)
  }
  return (
    <div>
      <h1>Counter History</h1>
      <p>{`Current: ${count}`}</p>
      <p>{`Previous: ${PreviousCountRef.current}`}</p>
      <button type="button" onClick={()=>Change(count +1)}>
        +1
      </button>
      <button type="button" onClick={()=>Change(count -1)}>
        -1
      </button>
    </div>
  );
}
