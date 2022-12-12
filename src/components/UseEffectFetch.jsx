import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProfileComponent from "./ProfileComponent";

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const fetchRes = await fetch("http://localhost:4000", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await fetchRes.json();
    setDataArr(data);
    console.log(dataArr);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {dataArr.map((el) => {
        return <ProfileComponent key={el.name} name={el.name} age={el.age} nickName={el.nickName} />;
      })}
    </>
  );
}
