function CustomList(props) {
  return (
    <ul>
      {/* el 겹치지 않게 할거면 이렇게 해도 됨, 더 깔끔 */}
      {props.arr.map((el) => {
        return <li key={el}>{el}</li>;
      })}
      {/* index 설정해줘도 됨 */}
      {/* {props.arr.map((el, index) => {
        return <li key={index}>{el}</li>;
      })} */}
    </ul>
  );
}

export default CustomList;
