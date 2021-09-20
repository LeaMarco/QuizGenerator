import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuestion, modifyQuestion } from "../../actions";
import styles from "./question.module.css";

const CreateQuestionText = ({ data }) => {
  const dispatch = useDispatch();
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
  );
};

export default CreateQuestionText;
