import { Component } from "react";

class ClassProps extends Component {
  render() {
    // const { name, age, nickName } = this.props;
    return (
      <div>
        <h1>이름:{this.props.name}</h1>
        <h1>나이:{this.props.age}</h1>
        <h1>별명:{this.props.nickName}</h1>
      </div>
    );
  }
}

export default ClassProps;
