import React, { Component } from "react";

class Date extends Component {
  render() {
    return (
      <div>
        <b>expiration date </b>
        {this.props.date}
      </div>
    );
  }
}
export default Date;
