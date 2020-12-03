import React from "react";
import styles from "./style.module.css";

export default function Flex(props) {
  console.log("🚀 ~ file: flex.js props", props);

  return (
    <div
      //  className={styles.main+' '+props.className}
      // className={[styles.main, props.className].join(' ')}
      // className={`${styles.main} ${props.className ? props.className: ''}`}
      className={`${styles.main} ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
}
