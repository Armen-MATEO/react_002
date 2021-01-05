import React from "react";
import styles from "./about.module.css";
import about from "../../../assets/about.png";
export default function About() {
  return (
    <div>
      <h7 className={styles.text}>
        <b>About page: </b>
        <span>with this page you can organise your timeline and agenda.</span>
      </h7>

      <img className={styles.image} src={about} alt="about" />
    </div>
  );
}
