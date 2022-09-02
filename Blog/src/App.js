import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

/*
// Destructuring 문법
let num = [1, 2];
let [a, c] = [1, 2];
*/

function App() {
  let post = "대소고 학생";
  let [글제목, 글제목변경] = useState(["대소고", "대소고란", "대소고 급식"]);
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, setmodal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h1>대소로그</h1>
      </div>
      <button
        onClick={() => {
          console.log("클릭");
          let copy = [...글제목];
          copy[0] = "개소고";
          copy.sort();
          글제목변경(copy);
        }}
      >
        글 정렬
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            👍
          </span>
          {좋아요}
        </h4>
        <p>8월 31일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>8월 31일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setmodal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>8월 31일 발행</p>
      </div>
      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
