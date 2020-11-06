import React from "react";
import Task from "./task/Task";
import picture from "../assets/images/nkar.jpg";

const inputStyle = {
  border: "2px solid blue",
  backgroundColor: "yellow",
};
class ToDo extends React.Component {
  state = {
    tasks: [],
    inputValue: "",
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };
  addTask = () => {
    const { inputValue } = this.state;

    const tasks = [...this.state.tasks];

    tasks.push(inputValue);

    this.setState({
      tasks: tasks,
      inputValue: "",
    });
  };

  render() {
    const { inputValue, tasks } = this.state;

    return (
      <div>
        <input
          type="Text"
          placeholder="add new tasks"
          value={inputValue}
          onChange={this.handleChange}
          style={inputStyle}
        />

        <input type="button" value="add" onClick={this.addTask} />
        <img src={picture} alt="todo list" />
        <ol>
          {tasks.map((task, index) => {
            return <Task key={index} data={task} selected={index === 2} />;
          })}
        </ol>
      </div>
    );
  }
}
export default ToDo;
