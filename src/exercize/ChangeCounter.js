import React, { Component } from "react";
import { connect } from "react-redux";
import Reset from "./ResetCounterButton";

class ChangeCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onChangeValue(-1)}>-</button>
        <button onClick={() => this.props.onChangeValue(1)}>+</button>
        <div>
          <br />
          <button onClick={() => this.props.onChangeValue(-5)}>-5</button>
          <button onClick={() => this.props.onChangeValue(+5)}>+5</button>
        </div>
        <br />
        <div>
          <button onClick={() => this.props.onChangeValue(-10)}>-10</button>
          <button onClick={() => this.props.onChangeValue(+10)}>+10</button>
        </div>
        <br />
        <div>
          <Reset />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeValue: (val) => {
      console.log("val", val);
      //action
      dispatch({ type: "CHANGE_VALUE", value: val });
    },
  };
};

export default connect(null, mapDispatchToProps)(ChangeCounter);
