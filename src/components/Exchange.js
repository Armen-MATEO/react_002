import React from "react";

function Exchange(props) {
  return (
    <div>
      <b>US Dollar </b>
      {props.currUSA}
      <br />
      <b>Armeian Dram </b>
      {props.currArm}
    </div>
  );
}
export default Exchange;
