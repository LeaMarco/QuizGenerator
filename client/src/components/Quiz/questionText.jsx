import React, { useState } from "react";
import styles from "./question.module.css";

const QuestionText = () => {
    const [answer, setAnswer] = useState("")
   
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>Pregunta Text</p>
      </div>
      <textarea onChange={()=>setAnswer()}/>
    </div>
  );
};

export default QuestionText;
