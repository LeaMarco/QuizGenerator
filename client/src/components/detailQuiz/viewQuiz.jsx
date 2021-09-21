import React, { useEffect, useState } from "react";
import styles from "./createQuiz.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import QuestionMultiple from "./questionMultiple";
import QuestionSimple from "./questionSimple";
import QuestionText from "./questionText";


const ViewQuiz = () => {
  const { id } = useParams();
  const [estado, setEstado] = useState("");
  const detailQuiz = (id) => {
    axios.get(`http://localhost:3001/detail/${id}`)
      .then((response) => setEstado(response.data));
  };
  
  useEffect(() => {
    detailQuiz(id);
    return () => {
      setEstado("");
    };
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.topLine} />
      <div className={styles.top}>
        <p className={styles.title}>{estado.name}</p>
        <p className={styles.description}>{estado.description}</p>
      </div>
      <div>
        {estado.questions &&
          estado.questions.map((question, index) =>
            question.question_type === "text" ? (
              <QuestionText estado={question} key={index} />
            ) : question.question_type === "multiple" ? (
              <QuestionMultiple estado={question} key={index} />
            ) : (
              <QuestionSimple estado={question} key={index} />
            )
          )}
      </div>
      <button className={styles.sendButton} onClick={()=>alert("Respuesta enviada!")}>Enviar</button>
    </div>
  );
};

export default ViewQuiz;
