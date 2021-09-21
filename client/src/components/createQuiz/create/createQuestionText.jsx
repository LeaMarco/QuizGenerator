import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuestion, modifyQuestion } from "../../../actions";
import styles from "../preview/question.module.css";
import eliminar from "../../../images/eliminar.svg";


const CreateQuestionText = ({ data }) => {
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
        <p>Pregunta {data+1}:</p>
        <input
          type="text"
          onChange={(e) =>
            dispatch(modifyQuestion(data, estado.question_type, e.target.value))
          }
        />
        
      </div>
    </div>
  );
};

export default CreateQuestionText;
