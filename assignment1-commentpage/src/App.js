import "./App.scss";
import Post from "./components/Post";
import { MdInsertComment } from "react-icons/md";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import Liked from "./components/Liked";
import CommentList from "./components/CommentList";
import CommentListItem from "./components/CommentListItem";

const App = () => {
  const [comments, setComment] = useState([{ id: 0, text: 'test text'}]);
  const nextId = useRef(1);
  const onInsert = useCallback(
    (text) => { 
      const comment = {
        id: nextId.current,
        text,
      };
      // useState 함수 최적화
      setComment((comments) => comments.concat(comment)); // setTodos를 사용할 때 todos => 만 추가해주면 된다. 그러면 setter의 업데이트 함수를

      nextId.current += 1;
    },
    // [todos],
    []
  );

  const onRemove = useCallback(
    (id) => {
      // useState 함수 최적화
      setComment(comments.filter(comment => comment.id !== id));
    },
    [comments],
  );
  return (
    <div>
      <Post></Post>
      <Liked onInsert={onInsert} comments={comments}></Liked>
      {/* <div className="Comment">
      </div> */}
      <CommentList comments={comments} onRemove={onRemove} />
    </div>
  );
};

export default App;
