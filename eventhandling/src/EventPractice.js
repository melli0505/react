import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class EventPractice extends Component {
  static state = {
    username: '',
    message: '',
  };
  //binding = 원래 메소드에서는 this에 접근할 수 없는데, 이것을 가능하도록 묶어주는 역할. 생성자에서 실행(정석)
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]:e.target.value //[]안에 든 값을 key로 쓴다는 뜻. 
    });
  }

  handleClick() {
    alert(this.state.username + ' : ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  }

  handleKeys(e) {
      if(e.key == 'Enter'){
          this.handleClick();
      }
  }

  // 메소드에 관한 다른 방법(without constructor), transform class properties 방식
  /*
  handleChange= (e)=> {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick= () => {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }
  */
  render() {
    return (
      <div>
        <h1>Event Priactice</h1>
        <input
          type="text"
          name="username"
          placeholder="enter name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="enter message"
          onChange={this.handleChange}
          onKeyPress={this.handleKeys}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
