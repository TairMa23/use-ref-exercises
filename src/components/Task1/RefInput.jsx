import { useRef } from "react";
export default function RefInput() {
  const inputRef = useRef(null);
  function handleClear() {
    inputRef.current.value = "";
  }
  return (
    <div>
      <h2>Clear Input with useRef</h2>
      <input type="text" 
      ref={inputRef} 
      placeholder="Enter your text..." />
      <button onClick={handleClear}>Clear Input</button>
    </div>
  );
}
