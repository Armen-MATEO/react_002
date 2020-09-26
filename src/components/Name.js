import React, { Component } from "react";

class Name extends Component {
  render() {
    return (
      <div>
        <b>name </b>
        {this.props.name}
      </div>
    );
  }
}
export default Name;
