import React, { useState, useRef, useCallback, useReducer, useEffect } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 5; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const [todos, setTodos] = useState(createBulkTodos);
  // const [todos, setTodos] = useState(
  //   createBulkTodos[
  //     ({
  //       id: 1,
  //       text: '리액트의 기초 알아보기',
  //       checked: true,
  //     },
  //     {
  //       id: 2,
  //       text: '컴포넌트에 스타일링 추가하기',
  //       checked: true,
  //     },
  //     {
  //       id: 3,
  //       text: '일정 관리 앱 만들기',
  //       checked: false,
  //     })
  //   ],
  // );

  const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // 최적화 전
      // setTodos(todos.concat(todo));
      // useState 함수 최적화
      setTodos(todos => todos.concat(todo)); // setTodos를 사용할 때 todos => 만 추가해주면 된다. 그러면 setter의 업데이트 함수를
      // useReducer
      // dispatch({ type: 'INSERT', todo });
      nextId.current += 1;
    },
    // [todos],
    [],
  );

  const onRemove = useCallback(
    (id) => {
      // 최적화 전
      // setTodos(todos.filter((todo) => todo.id !== id));
      // useState 함수 최적화
      setTodos(todos => todos.filter(todo => todo.id !== id));
      // useReducer
      // dispatch({ type: 'REMOVE', id });
    },
    // [todos],
    [],
  );

  const onToggle = useCallback(
    (id) => {
      // 최적화 전
      // setTodos(
      //   todos.map(todo =>
      //     todo.id === id ? {...todo, checked: !todo.checked} : todo
      //   ),
      //useState 함수 최적화
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
      // useReducer
      // dispatch({type: 'TOGGLE', id});
    },
    // [todos],
    [],
  );

  useEffect(() => {
    let count = 0;
    for(let i = 0; i < todos.length; i++){
      if(todos[i].checked !== true){
        count += 1;
      }
    }
    if(count === 0){
      alert("모든 할일을 완료하였습니다. 축하합니다!")
    }
  },
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      ></TodoList>
    </TodoTemplate>
  );
};

export default App;
