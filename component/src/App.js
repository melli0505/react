import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";

class App extends MyComponent {
  render() {
    return (
      <MyComponent name = "Kang Dain" age={20}></MyComponent>
    );
  }
}



export default App;
