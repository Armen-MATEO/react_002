import React from "react";
import styles from "./footer.module.css";
import {SocialIcon} from 'react-social-icons';

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        2021 Armen Matosyan
        <br />
        Yerevan Armenia
        <div className={styles.icon}>
        <SocialIcon  url="https://github.com/Armen-MATEO" target="_blank"  />
        <SocialIcon url ="https://www.linkedin.com/in/armen-matosyan-5a0246143/" target="_blank"  />
        </div>
      </footer>

    </div>
  );
}
