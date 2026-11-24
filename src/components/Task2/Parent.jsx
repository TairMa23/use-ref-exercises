import { useRef, useState } from "react";
import TextBox from "./TextBox";

export default function Parent() {
    const inputRef = useRef(null);
    const [value, setValue] = useState("");

    function handleShowValue() {
        setValue(inputRef.current.value);
    }

    return (
        <>
            <h2>Parent Component</h2>

            <TextBox inputRef={inputRef} />

            <button onClick={handleShowValue}>
                Show Value
            </button>

            <p>Input Value: {value}</p>
        </>
    );
}