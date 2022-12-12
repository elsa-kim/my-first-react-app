import React, { useEffect } from "react";

export default function Timer() {
  // 1. 마운트 될 때
  // 2. 의존성 배열의 값이 변할 때
  // 3. 의존성 배열이 없으면 -> 렌더링 될 때마다
  // 4. 의존성 배열 있으면 -> ...?
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 실행 중");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>타이머 실행 중</h1>
    </>
  );
}
