import { useState } from "react";

function ChangeObj(props) {
  let [state, setState] = useState(0);
  let obj = props.objArr[state];
  const plus = () => {
    state === props.objArr.length - 1 ? setState(0) : setState((state += 1));
  };

  return (
    <div>
      <button onClick={plus}>
        <h1>프로필 변경하기</h1>
      </button>
      <h3>이름 : {obj.name}</h3>
      <h3>나이 : {obj.age}</h3>
      <h3>별명 : {obj.nickName}</h3>
    </div>
  );
}

export default ChangeObj;
