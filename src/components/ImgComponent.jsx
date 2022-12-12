import img from "../cat2.jpeg";
import React, { Component } from "react";

class Img extends Component {
  render() {
    return <img src={img} alt="cat" />;
  }
}

export default Img;
