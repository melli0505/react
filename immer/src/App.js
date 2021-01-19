import React, { useRef, useCallback, useState } from "react";
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({ array: [], uselessValue: null });

  // input 수정 시
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        // produce(form, draft => {
        //   draft[name] = value;
        // })
        produce(draft => {
          draft[name] = value; // 첫 번째 파라미터가 함수 ⇒ 업데이트 함수 반환.
        })
      );
    },
    []
  );

  // form 등록 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array 새 항목 등록
      setData(
        // produce(data, draft => {
        //   draft.array.push(info);
        // })
        produce(draft => { // 첫 번째 파라미터가 함수 ⇒ 업데이트 함수 반환.
          draft.array.push(info);
        })
      );

      // form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  // 항목 삭제
  const onRemove = useCallback(
    (id) => {
      setData(
      // {
      //   ...data,
      //   array: data.array.filter((info) => info.id !== id),
      // }
        // produce(data, draft => {
        //   draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        // })
        produce(draft => { // 첫 번째 파라미터가 함수 ⇒ 업데이트 함수 반환.
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    },
    []
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="ID"
          value={form.username}
          onChange={onChange}
        ></input>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
        ></input>
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;