import React from "react";
export function Weather(props) {
  return (
    <div>
      <b>country </b>
      {props.country}
      <br />
      <b>city </b>
      {props.city}
      <br />
      <b>day </b>
      {props.day}
      <br />
      <b>night </b>
      {props.night}
    </div>
  );
}
