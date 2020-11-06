import React from "react";
import styles from "./task.module.css";
import classes from "./task.module.css";

function Task(props) {
  return (
    <li className={`${styles.task} ${props.selected ? classes.selected : ""}`}>
      {props.data}
    </li>
  );
}
export default Task;
