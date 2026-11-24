export default function TextBox({ inputRef }) {
    return (
        <div>
            <h2>TextBox Component</h2>

            <input
                type="text"
                ref={inputRef}
                placeholder="Enter your text..."
            />
        </div>
    )
}