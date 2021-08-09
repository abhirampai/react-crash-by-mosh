import { useState } from "react";

/**
 * solution for exercise 10 in bb academy
 */

export default function Exercise10() {
  const [v, setV] = useState("ABHIRAM");
  const getFormattedText = (textToFormat, oldCursorPointer) => {
    const textBeforeCursor = textToFormat.slice(0, oldCursorPointer);
    const textAfterCursor = textToFormat.slice(oldCursorPointer);

    const formattedText = textBeforeCursor.toUpperCase() + textAfterCursor;

    const newCursorPosition = textBeforeCursor.length;
    console.log(newCursorPosition);
    return [formattedText, newCursorPosition];
  };
  const handleChange = (e) => {
    const input = e.target;
    const oldCursorPosition = input.selectionStart;

    const [formattedOutput, newCursorPosition] = getFormattedText(
      input.value,
      oldCursorPosition
    );

    setV(formattedOutput);
    window.requestAnimationFrame(() => {
      input.selectionStart = newCursorPosition;
      input.selectionEnd = newCursorPosition;
    });
  };
  return (
    <>
      <input value={v} onChange={handleChange} />
    </>
  );
}
