import React, { Component } from "react";

export class Price extends Component {
  constructor(props) {
    super();
  }
  state = {
    dram: "480 dram",
  };
  handleClick = () => {
    this.setState({
      dollar: this.state.dram,
      dram: this.props.dollar,
    });
  };

  render() {
    return (
      <div>
        <b>currency</b>
        <br />
        <p>{this.state.dram}</p>
        <button onClick={this.handleClick}>Change the currency</button>
      </div>
    );
  }
}
