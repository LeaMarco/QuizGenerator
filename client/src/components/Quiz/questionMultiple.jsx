import React, { useState } from "react";
import styles from "./question.module.css";

const QuestionMultiple = () => {
    const [selected, setSelected] = useState([])
   
    const changeState = (id) =>{
        selected.includes(id) ? setSelected(selected.filter(e=>e!==id)) : setSelected([...selected, id])
    }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>Pregunta Multiple</p>
      </div>
      <div className={styles.options}> 
          <span className={selected.includes(1)?styles.selected:styles.unselected} onClick={()=>changeState(1)}>opcion 1</span>
          <span className={selected.includes(2)?styles.selected:styles.unselected} onClick={()=>changeState(2)}>opcion 2</span>
          <span className={selected.includes(3)?styles.selected:styles.unselected} onClick={()=>changeState(3)}>opcion 3</span>
      </div>
    </div>
  );
};

export default QuestionMultiple;
