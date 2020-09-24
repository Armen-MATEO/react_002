import React from "react";
export function Market(props) {
  return (
    <div>
      <b>product </b>
      {props.name}
      <br />
      <b>price </b>
      {props.price}
    </div>
  );
}
