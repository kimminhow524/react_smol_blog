import { useState } from "react";
import "./App.css";

function App() {
  let [titleName, setTitleName] = useState([
    "남자 코트 추천",
    "강남우동 맛집",
    "파이썬 독학",
  ]);
  let [liked, setLiked] = useState([0, 0, 0]);
  let [modalOn, setModalOn] = useState(false);
  let [titleCnt, setTitle] = useState(0);
  let [inputVal, setInputVal] = useState("");
  let [date, setDate] = useState(["9월 21일", "9월 21일", "9월 21일"]);

  const datePicker = () => {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();
    return month + 1 + "월 " + day + "일";
  };
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      {titleName.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModalOn(true);
                setTitle(i);
              }}
            >
              {titleName[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...liked];
                  copy[i] += 1;
                  setLiked(copy);
                }}
              >
                👍
              </span>
              {liked[i]}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  let temp = [...titleName];
                  let temp2 = [...liked];
                  let temp3 = [...date];
                  temp2.splice(i);
                  temp.splice(i);
                  temp3.splice(i);
                  setLiked(temp2);
                  setTitleName(temp);
                  setDate(temp3);
                }}
              >
                삭제
              </button>
            </h4>
            <p>{date[i]} 발행</p>
          </div>
        );
      })}
      <input
        type="text"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (inputVal !== "") {
            let temp = [...titleName];
            let temp2 = [...liked];
            let temp3 = [...date];
            temp2.unshift(0);
            temp.unshift(inputVal);
            temp3.unshift(datePicker());
            setLiked(temp2);
            setTitleName(temp);
            setDate(temp3);
          }
        }}
      >
        발행
      </button>
      {modalOn === true ? (
        <Modal titleCnt={titleCnt} titleName={titleName} />
      ) : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.titleName[props.titleCnt]}</h4>
      <p>{}날짜 : 2월 18일 발행</p>
      <p>{}상세내용</p>
    </div>
  );
};

export default App;
