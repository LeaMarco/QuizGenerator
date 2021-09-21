import React from "react";
import styles from "./createQuiz.module.css";
import QuestionMultiple from "./questionMultiple";
import QuestionSimple from "./questionSimple";
import QuestionText from "./questionText";
import { useSelector } from "react-redux";

const PreviewQuiz = () => {
  let estado = useSelector((state) => state);
  console.log(estado, "ESTADOO");
  return (
    <div className={styles.container}>
      <span className={styles.previewLabel}>
        Vista previa
      </span>
      <div className={styles.top}>
        <p className={styles.title}>{estado.name}</p>
        <p className={styles.description}>{estado.description}</p>
      </div>
      <div>
        {estado.questions &&
          estado.questions.map((question, index) =>
            question.question_type === "text" ? (
              <QuestionText data={index} key={index} />
            ) : question.question_type === "multiple" ? (
              <QuestionMultiple data={index} key={index} />
            ) : (
              <QuestionSimple data={index} key={index} />
            )
          )}
      </div>
    </div>
  );
};

export default PreviewQuiz;
