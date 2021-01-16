import logo from "./logo.svg";
import "./App.css";
import "./ValidationSample.js";
import { Component } from "react";
import ValidationSample from "./ValidationSample.js";
import ScrollBox from "./ScrollBox";
// 이 개념 이해 필요
class App extends Component {
  state = {
    upDown: 'u',
    value: 'to Bottom'
  };

  upOrDwon = () => {
    if(this.state.upDown === 'u'){
      this.setState({
        upDown: 'd',
        value: 'to Top'
      });
    }
    else{
      this.setState({
        upDown: 'u',
        value: 'to Bottom'
      });
    }
  };


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
        <button onClick={() => {
          this.scrollBox.scrollTo(this.state.upDown);
          this.upOrDwon();
          }}> 이동 </button>
      </div>
    );
  }
}

export default App;
