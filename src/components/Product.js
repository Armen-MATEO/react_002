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
        <Name name="Milk" />
        <Made made="Armenia" />
        <Price price="1.59" />
        <Date date="01.10.2020" />
        <Description description="Eco" />
      </div>
    );
  }
}
