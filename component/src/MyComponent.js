import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = { // properties, 컴포넌트 속성. 컴포넌트 자체에서는 읽기 전용
    name: "default name",
    age: 3, 
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    // 생성자
    super(props); // 별도로 설정해주지 않으면 component 클래스의(부모) 생성자 상속
    this.state = { // state = 컴포넌트 내부에서 읽고 업데이트할 수 있는 값
      number: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, my name is {this.props.name}.</h1>
        <h1>I am {this.props.age} years old.</h1>
        <h1>Number: {this.state.number}</h1>
        <button
          onClick={() => {
            this.setState({ // state는 오직 setState를 통해서만 가능함.
              number: this.state.number + 1,
            });
          }}
        >
          더하기
        </button>
      </div>
    );
  }
}

export default MyComponent;
