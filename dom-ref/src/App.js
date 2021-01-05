import logo from "./logo.svg";
import "./App.css";
import "./ValidationSample.js";
import { Component } from "react";
import ValidationSample from "./ValidationSample.js";
import ScrollBox from "./ScrollBox";
// 이 개념 이해 필요
class App extends Component {
  render() {
    const sizedbox = { height: '10px'};
    const margins = {marginLeft: '20px'}
    return (
      <div>
        <div style = {margins}>
        <h1>Find Your Gradient!</h1></div>
        <ValidationSample />
        <div style = {sizedbox}></div>
        <ScrollBox ref = {(ref)=>{this.scrollBox=(ref)}}/> 
        <button onClick={() => this.scrollBox.scrollToBottom()}> 맨 아래로 </button>
      </div>
    );
  }
}

export default App;
