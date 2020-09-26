import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div>
        <b>description </b>
        {this.props.description}
      </div>
    );
  }
}
export default Description;
