import React, { Component } from "react";
import { Price } from "./Price";
import Made from "./Made";
import Date from "./Date";
import Name from "./Name";
import Description from "./Description";

export class Product extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <Name text={this.props.name} />
        <Made text={this.props.made} />
        <Price text={this.props.price} rate={this.props.rate} />
        <Date text={this.props.date} />
        <Description text={this.props.description} />
      </div>
    );
  }
}
