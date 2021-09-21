import React, { useState } from "react";
import styles from "./question.module.css";
import { useSelector } from "react-redux";

const QuestionSimple = ({ data }) => {
  const [selected, setSelected] = useState([]);
  let estado = useSelector((state) => state.questions[data]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>{estado.text.length ? estado.text : "Ingresar pregunta"}</p>
      </div>
      <div className={styles.options}>
        {estado.options?.length &&
          estado.options.map((option, index) => (
            <span
              className={
                selected.includes(index) ? styles.selected : styles.unselected
              }
              onClick={() => setSelected([index])}
            >
                              {option.length ? option : "Ingrese una opción"}
            </span>
          ))}
      </div>
    </div>
  );
};

export default QuestionSimple;
