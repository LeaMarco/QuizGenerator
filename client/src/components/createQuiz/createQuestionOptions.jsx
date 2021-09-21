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
import menos from "../../images/menos.svg";
import eliminar from "../../images/eliminar.svg";


const CreateQuestionOptions = ({ data }) => {
  const dispatch = useDispatch();
  let estado = useSelector((state) => state.questions[data]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.deleteButtonContainer}>
          <img
            src={eliminar}
            alt=""
            className={styles.deleteOptionButton}
            onClick={(e) => {
              e.preventDefault();
              dispatch(deleteQuestion(data));
            }}
          />
        </div>
        <p>Pregunta {data + 1}:</p>
        <input
          type="text"
          onChange={(e) =>
            dispatch(modifyQuestion(data, estado.question_type, e.target.value))
          }
        />
      </div>

      <div className={styles.options}>
        <div className={styles.options}>
          {estado.options?.length &&
            estado.options.map((option, index) => (
              <div className={styles.optionContainer}>
                <p>Opción {index + 1}:</p>

                <div className={styles.optionEditContainer}>
                  <input
                    type="text"
                    onChange={(e) =>
                      dispatch(modifyOption(data, index, e.target.value))
                    }
                  />
                  {estado.options?.length > 2 && (
                    <img
                      src={menos}
                      alt=""
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(deleteOption(data, index));
                      }}
                      className={styles.deleteOptionButton}
                    />
                  )}
                </div>
              </div>
            ))}
          <div className={styles.ButtonContainer}>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(addOption(data, ""));
              }}
              className={styles.Button}
            >
              Agregar opción
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuestionOptions;
