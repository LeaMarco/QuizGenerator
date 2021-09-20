import React, { useState } from "react";
import styles from "./question.module.css";

const QuestionSimple = () => {
    const [selected, setSelected] = useState([])
   
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>Pregunta Simple</p>
      </div>
      <div className={styles.options}> 
          <span className={selected.includes(1)?styles.selected:styles.unselected} onClick={()=>setSelected([1])}>opcion 1</span>
          <span className={selected.includes(2)?styles.selected:styles.unselected} onClick={()=>setSelected([2])}>opcion 2</span>
          <span className={selected.includes(3)?styles.selected:styles.unselected} onClick={()=>setSelected([3])}>opcion 3</span>
      </div>
    </div>
  );
};

export default QuestionSimple;
