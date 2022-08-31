import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

let post = "대소고 학생";
let [글제목, a] = useState("대소고 추천");
let [글제목2, b] = useState("대소고란");
let [글제목3, c] = useState("대소고 기숙사");

/*
// Destructuring 문법
let num = [1, 2];
let [a, c] = [1, 2];
*/

function App() {
  return (
    <div className="App">
      <div className="balck-nav">
        <h4>대소로그</h4>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>8월 31일 발행</p>
      </div>
      <div>
        <h4>{글제목2}</h4>
        <p>8월 31일 발행</p>
      </div>
      <div>
        <h4>{글제목3}</h4>
        <p>8월 31일 발행</p>
      </div>
    </div>
  );
}

export default App;
