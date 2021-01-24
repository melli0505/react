import logo from "./logo.svg";
import "./App.css";
import Post from "./components/Post";
import { useCallback, useEffect, useRef, useState } from "react";
import Liked from "./components/Liked";

const App = () => {
  // const [like, setLike] = useState({ liked: true });
  // const onClicked = () => {
  //   useEffect(()=> {
  //     if(like){
  //       setLike(false);
  //     }
  //     else{
  //       setLike(true);
  //     }
  //   });
  // };
  return (
    <div>
      <Post></Post>
      <Liked></Liked>
    </div>
  )
};

export default App;
