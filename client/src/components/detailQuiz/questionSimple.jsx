import React, { useState } from "react";
import styles from "./question.module.css";

const QuestionSimple = ({estado}) => {
    const [selected, setSelected] = useState([])
   
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>{estado.text}</p>
      </div>
      <div className={styles.options}> 
          {estado.options?.length && estado.options.map((option, index) => 
            <span className={selected.includes(index)?styles.selected:styles.unselected} onClick={()=>setSelected([index])}>{option.option}</span>
            )}
      </div>
    </div>
  );
};

export default QuestionSimple;
