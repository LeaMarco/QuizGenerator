import React, { useState } from "react";
import styles from "./question.module.css";

const QuestionText = ({estado}) => {
    const [answer, setAnswer] = useState("")
   
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
