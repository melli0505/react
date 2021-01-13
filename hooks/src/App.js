import "./App.css";
import React, { Component, useState } from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {/* <button onClick={() => setVisible(!visible)}>보이기/숨기기</button>
      <hr></hr>
      {visible && <Info></Info>} */}
      <Average></Average>
    </div>
  );
};

export default App;
