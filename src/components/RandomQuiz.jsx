import React, { useState, useRef } from "react";

// 내 답
// export default function RandomQuiz() {
//   const a = ["X", "-", "+"];
//   const inputVal = useRef();
//   const [num1, setnum1] = useState(Math.floor(Math.random() * 10));
//   const [num2, setnum2] = useState(Math.floor(Math.random() * 10));
//   const [oper, setoper] = useState(a[Math.floor(Math.random() * a.length)]);
//   const cor = () => {
//     alert("정답입니다!");
//     setnum1(Math.floor(Math.random() * 10));
//     setnum2(Math.floor(Math.random() * 10));
//     setoper(a[Math.floor(Math.random() * a.length)]);
//     inputVal.current.value = "";
//     inputVal.current.focus();
//   };
//   const incor = () => {
//     alert("틀렸습니다. 다시 입력해주세요");
//     inputVal.current.value = "";
//     inputVal.current.focus();
//   };

//   const calc = () => {
//     if (oper === "X") {
//       num1 * num2 === Number(inputVal.current.value) ? cor() : incor();
//     } else if (oper === "-") {
//       num1 - num2 === Number(inputVal.current.value) ? cor() : incor();
//     } else {
//       num1 + num2 === Number(inputVal.current.value) ? cor() : incor();
//     }
//   };
//   return (
//     <div>
//       <div>
//         <h1>
//           {num1} {oper} {num2}
//         </h1>
//       </div>
//       <input type="text" ref={inputVal} />
//       <button onClick={calc}>정답 제출!</button>
//     </div>
//   );
// }

// 강사님 풀이
export default function RandomQuiz() {
  const firstRandomNumber = Math.floor(Math.random() * 10);
  const secondRandomNumber = Math.floor(Math.random() * 10);
  const arithmetic = Math.floor(Math.random() * 3);
  const arithmeticArr = ["+", "-", "x"];

  let answer = 0;
  if (arithmetic === 0) {
    answer = firstRandomNumber + secondRandomNumber;
  } else if (arithmetic === 1) {
    answer = firstRandomNumber - secondRandomNumber;
  } else {
    answer = firstRandomNumber * secondRandomNumber;
  }

  const answerInput = useRef();
  const [again, setAgain] = useState(false);

  const checkAnswer = () => {
    if (Number(answerInput.current.value) === answer) {
      alert("정답입니다!");
      answerInput.current.value = "";
      answerInput.current.focus();
      //   true, false 중요하지 않음 값이 바뀌게 해줌으로써 랜덤 새로고침 되도록(리렌더링)
      setAgain(!again);
    } else {
      alert("틀렸습니다. 다시 입력해주세요!");
      answerInput.current.value = "";
      answerInput.current.focus();
    }
  };

  return (
    <div>
      <h1>
        {firstRandomNumber} {arithmeticArr[arithmetic]} {secondRandomNumber}
      </h1>
      <input type="text" ref={answerInput} />
      <button onClick={checkAnswer}>정답 제출!</button>
    </div>
  );
}
