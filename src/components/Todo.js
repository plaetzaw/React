import React, { Component } from "react";
import "./Todo.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputTxt: ""
    };
  }
  handleInput = e => {
    //e.target.value
    //DON"T DO THIS
    // this.state.input = e.target.value
    this.setState({
      inputTxt: e.target.value
    });
  };
  addTaskItem = () => {
    //current value of our inputTXT
    let input = this.state.inputTxt;
    // current array
    let tasks = this.state.tasks;
    //push
    tasks.push(input);
    this.setState(
      {
        tasks: tasks,
        inputTxt: ""
      },
      () => {
        console.log(this.state.tasks);
      }
    );
    // console.log(this.state.tasks);
    // this.setState({}, ()=>{
    // })
  };
  render() {
    let taskList = this.state.tasks.map((task, index) => {
      return <li key={index}>{task}</li>;
    });

    console.log("taskList", taskList);

    return (
      <div className="todo-form">
        {/* {this.state.inputTxt} */}
        <br />
        <input
          type="text"
          value={this.state.inputTxt}
          onChange={this.handleInput}
        />
        <button onClick={this.addTaskItem}>Add Task</button>
        <br />
        <ul>{taskList}</ul>
      </div>
    );
  }
}
export default TodoList;

//My Attempt

// class Todo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [],
//       addTask: ""
//     };
//   }

//   handleChange = e => {
//     this.setState({
//       addTask: e.target.value.concat(this.addTask)
//     });
//   };

//   render() {
//     let taskList = this.state.tasks.map((task, index) => {
//       return <h2>{this.state.task}</h2>;
//       console.log(taskList);
//     });
//     return (
//       <>
//         <form>
//           <input type="text" />
//           <button type="submit" onChange={this.handleChange} />
//         </form>
//         {console.log(taskList)}
//         <br />
//         <ul>{this.state.taskList}</ul>
//       </>
//     );
//   }
// }
