import React, { useState } from "react";
import styles from "./question.module.css";
import { useSelector } from "react-redux";


const QuestionMultiple = ({estado}) => {
    const [selected, setSelected] = useState([])
    const changeState = (id) =>{
        selected.includes(id) ? setSelected(selected.filter(e=>e!==id)) : setSelected([...selected, id])
    }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>{estado.text}</p>
      </div>
      <div className={styles.options}>
        <div className={styles.options}>
          {estado.options?.length &&
            estado.options.map((option, index) => (
              <span
                className={
                  selected.includes(index) ? styles.selected : styles.unselected
                }
                onClick={() => changeState(index)}
              >
                {option.option}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionMultiple;
