import React, { useState } from "react";
import styles from "./question.module.css";
import { useSelector } from "react-redux";

const CreateQuestionText = ({ data }) => {
  const [answer, setAnswer] = useState("");
  let estado = useSelector((state) => state.questions[data]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>{estado.text.length ? estado.text : "Ingresar pregunta"}</p>
      </div>
      <textarea />
    </div>
  );
};

export default CreateQuestionText;
