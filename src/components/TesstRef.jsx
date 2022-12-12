import React from "react";
import { useState, useRef } from "react";

export default function TesstRef() {
  const [text, setText] = useState("안녕하세요");

  const inputValue = useRef();

  const onChangeText = (e) => {
    console.log("event", e);
    console.log(inputValue);
    // e.targer : DOM 요소
    const inputText = inputValue.current.value;
    setText(inputText);
  };

  return (
    <div>
      <h1>{text}</h1>
      <input
        ref={inputValue}
        onChange={(e) => {
          onChangeText(e);
        }}
      />
    </div>
  );
}
