import React from "react";
import styles from "./styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
