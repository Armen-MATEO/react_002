import React from "react";
import styles from "./BlockStyle.module.css";

function Block(props) {
  return <div className={styles.Block}>{props.number}</div>;
}
export default Block;
