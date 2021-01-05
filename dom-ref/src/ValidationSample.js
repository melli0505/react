import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    Validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonChange = (e) => {
    this.setState({
      clicked: true,
      Validated: this.state.password === "0000",
    });
    this.input.focus();
  };

  render() {
    const div_style = {alignItems: 'center', marginLeft: '20px', width: '100px'}
    const sized = {width: '5px'}
    return (
      <div style={div_style}>
        <input
          ref = {(ref)=>{this.input = ref}}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.Validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <div style={sized}></div>
        <button onClick={this.handleButtonChange}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
