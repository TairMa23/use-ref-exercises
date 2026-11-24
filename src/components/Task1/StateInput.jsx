import { useState } from "react";

export default function StateInput() {
  const [text, setText] = useState("");
  function handleClear() {
    setText("");
  }
  return (
    <div>
      <h2>Clear Input with useState</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text..."
      />
      <button onClick={handleClear}>Clear Input</button>
    </div>
  );
}
