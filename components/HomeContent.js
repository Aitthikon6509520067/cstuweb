import React from "react";
import styles from "../app/Home.module.css";

const HomeContent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.Text1}>RECOMMEND</h1>
      <div className={styles.box_space}>
        <div className={styles.box}>Poster</div>
        <div className={styles.box}>Poster</div>
        <div className={styles.box}>Poster</div>
        <div className={styles.box}>Poster</div>
      </div>
    </div>
  );
};

export default HomeContent;
