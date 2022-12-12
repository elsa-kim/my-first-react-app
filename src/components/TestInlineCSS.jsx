import React from "react";

const headingStyle = {
  color: "blue",
};
const spanStyle = {
  backgroundColor: "skyblue",
  fontWeight: "700",
};

export default function TestInlineCSS() {
  return (
    <div style={{ backgroundColor: "orange" }}>
      <h1 style={headingStyle}>CSS 테스트 컴포넌트 입니다!</h1>
      <span style={spanStyle}>해당 컴포넌트를 CSS로 꾸며보아요!</span>
    </div>
  );
}
