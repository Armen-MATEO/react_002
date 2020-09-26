import React, { Component } from "react";

export class Product extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <b>Product </b>
        {this.props.name}
        <br />
        <b>price </b>
        {this.props.price}
        <br />
        <b>description </b>
        {this.props.description}
        <br />
        <b>made in </b>
        {this.props.made}
        <br />
        <b>expiration-date </b>
        {this.props.date}
      </div>
    );
  }
}
