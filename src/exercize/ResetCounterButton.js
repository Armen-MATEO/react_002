import React from "react";
import { connect } from "react-redux";

function Reset(props) {
  return (
    <div>
      <button onClick={() => props.onSendValue(0)}>Reset</button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSendValue: (val) => {
      //action
      dispatch({ type: "RESET_VALUE", value: val });
    },
  };
};

export default connect(null, mapDispatchToProps)(Reset);
