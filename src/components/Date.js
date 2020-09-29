import React, { Component } from "react";

class Date extends Component {
  render() {
    return <p>Expiration date: {this.props.text}</p>;
  }
}
export default Date;
