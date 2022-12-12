// import { useState, useRef, useEffect } from "react";
// import MainHeader from "./components/MainHeader";
// import Counter from "./components/Counter";
// import Img from "./components/ImgComponent";
// import Btn from "./components/BtnToNaver";
// import ClassState from "./components/ClassState";
// import FunctionalState from "./components/FuntionalState";
// import ClassProps from "./components/ClassProps";
// import CustomList from "./components/CustomList";
// import CustomObj from "./components/CustonObj";
// import ChangeObj from "./components/ChangeObj";
// import Comparing from "./components/Comparing";
// import TesstRef from "./components/TesstRef";
// import ChangeFocus from "./components/ChangeFocus";
// import RefDOM from "./components/RefDOM";
// import RandomQuiz from "./components/RandomQuiz";
// import ReactFragment from "./components/ReactFragment";
// import TableColumn from "./components/tableColumn";
// import ConditionalRender from "./components/ConditionalRender";
// import ConditionalRender2 from "./components/ConditionalRender2";
// import PracticeOne from "./components/PracticeOne";
// import PracticeTwo from "./components/PracticeTwo";
// import TestUseEffect from "./components/TestUseEffect";
// import Timer from "./components/Timer";
// import PracticeTimer from "./components/PracticeTimer";
// import UseEffectFetch from "./components/UseEffectFetch";

// import "./App.css";
// import UsingUseMemo from "./components/UsingUseMemo";
// import TestInlineCSS from "./components/TestInlineCSS";
// import TestCssFile from "./components/TestCssFile";
// import TestStyled from "./components/TestStyled";

// function App() {
//   return (
//     <div className="App">
//       <TestStyled />
//     </div>
//   );
// }
// export default App;

import styled from "styled-components";
import logo from "./logo.svg";
import { keyframes } from "styled-components";

const App_logo_spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
  transform: rotate(360deg);
  }
`;

const RootDiv = styled.div`
  text-align: center;
`;
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${App_logo_spin} infinite 20s linear;
  }
`;
const MyA = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.{" "}
        </p>
        <MyA href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></MyA>
      </AppHeader>
    </RootDiv>
  );
}
export default App;
