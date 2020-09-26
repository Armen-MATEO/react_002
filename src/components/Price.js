import React, { Component } from "react";

export class Price extends Component {
  render() {
    return (
      <div>
        <b>price </b>
        {this.props.price}
      </div>
    );
  }
}
