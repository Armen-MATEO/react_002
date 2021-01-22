import React from "react";
import cry from "../../../assets/cry.jpeg";
import styles from "./notFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <h2>Error 404</h2>
          <p>Page not found!<span>  awwww... don't cry, just <Link to="/">go home</Link>
            </span>
          </p>
        </div>

        <div className={styles.pic}>
          <img src={cry} alt="404" className={styles.image} />
        </div>
      </div>
    </>
  );
}
