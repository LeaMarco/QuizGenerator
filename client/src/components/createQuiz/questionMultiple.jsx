import React, { useState } from "react";
import styles from "./question.module.css";
import { useSelector } from "react-redux";

const QuestionMultiple = ({ data }) => {
  const [selected, setSelected] = useState([]);
  let estado = useSelector((state) => state.questions[data]);

  const changeState = (id) => {
    selected.includes(id)
      ? setSelected(selected.filter((e) => e !== id))
      : setSelected([...selected, id]);
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>{estado.text.length ? estado.text : "Ingresar pregunta"}</p>
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
                {option.length ? option : "Ingresar una opción"}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionMultiple;
