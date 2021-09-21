import React from "react";
import styles from "./question.module.css";

const QuestionText = ({estado}) => {
   
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>{estado.text}</p>
      </div>
      <textarea />
    </div>
  );
};

export default QuestionText;
