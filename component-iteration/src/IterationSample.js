import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  // useState함수는 배열 반환. [0]은 현재 상태, [1]은 setter
  const [inputText, setInputText] = useState(""); // [] 안의 첫 번째 원소는 현재 상태, 뒤는 setter. 비구조화 할당
  const [nextId, setNextId] = useState(5);
  /* =
  const nextIdArr = useState(5);
  const nextId = nextIdArr[0];
  const setNextId = nextIdArr[1];
  */

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const nextNames = names.concat({
      // concat은 배열을 새로 추가해주는 것, push는 기존 배열을 바꾸는 것.
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); // nextId가 5로 되어있는데 다음 아이디는 여기서 1씩 증가
    setNames(nextNames); // nextNames를 names에 반영
    setInputText(""); // input text를 비운다
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id); // name의 id 중에 parameter id가 아닌 것만 남긴다
    setNames(nextNames); // 변경사항 반영
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
