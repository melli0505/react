import React, { useCallback, useMemo, useState, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputRef = useRef(null);

  // const onChange = (e) => {
  //   setNumber(e.target.value);
  // };

  // useCallback
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); // component가 처음 렌더링될 때만 함수 생성

  // const onInsert = (e) => {
  //   const nextList = list.concat(parseInt(number));
  //   setList(nextList);
  //   setNumber("");
  // };

  // useCallback
  const onInsert = useCallback(e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputRef.current.focus(); // 등록 버튼 눌렀을 때 포커스를 인풋 쪽으로 넘어가도록 한다.
  }, [number, list]); // number나 list가 바뀔 때 만 함수 생성

  
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputRef} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <strong>평균값 : </strong>
        {/* {getAverage(list)} */}
        {avg}
      </div>
    </div>
  );
};

export default Average;