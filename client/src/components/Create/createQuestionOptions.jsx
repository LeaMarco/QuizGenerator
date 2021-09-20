import React, { useState } from "react";
import styles from "./question.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addOption,
  deleteOption,
  deleteQuestion,
  modifyOption,
  modifyQuestion,
} from "../../actions";

const CreateQuestionOptions = ({ data }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  let estado = useSelector((state) => state.questions[data]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>Pregunta:</p>
        <input
          type="text"
          onChange={(e) =>
            dispatch(modifyQuestion(data, estado.question_type, e.target.value))
          }
        />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(addOption(data, "soy una opcion"));
        }}
      >
        agregar opcion
      </button>
      <div className={styles.options}>
        <div className={styles.options}>
          {estado.options?.length &&
            estado.options.map((option, index) => (
              <div className={styles.unselected}>
                <p>Opción {index}</p>
                <input
                  type="text"
                  onChange={(e) =>
                    dispatch(modifyOption(data, index, e.target.value))
                  }
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteOption(data, index));
                  }}
                >
                  Eliminar opcion
                </button>
              </div>
            ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(deleteQuestion(data));
            }}
          >
            Eliminar pregunta
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuestionOptions;
