import React from "react";
import B from "./B";
import C from "./C";
import D from "./D";
import E from "./E";

class A extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    task: "",
    inputValue: "",
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  getValue = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <div>
          <button onClick={this.props.Task}>click me</button>
          <p>{this.state.inputValue}</p>
        </div>
        -------------------------------------------------------
        <B onSendValue={this.getValue} />
        <C text={this.state.value} />
        --------------------------------------------------------
        <D />
        -----------------------------------------
        <E />
      </div>
    );
  }
}
export default A;
