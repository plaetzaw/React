import React, { Component } from "react";
import Child from "./components/Child";
import News from "./components/News";
import Todo from "./components/Todo";
import "./components/Todo.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          {/* <Child /> */}
          {/* <News /> */}
          {<Todo />}
        </div>
      </>
    );
  }
}

export default App;
