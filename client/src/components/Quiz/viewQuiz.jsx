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
  const detailHero = (id) => {
    axios
      .get(`http://localhost:3001/detail/${id}`)
      .then((response) => setEstado(response.data));
  };
  console.log(estado, "ESTADO EN EL DETALLE")
  useEffect(() => {
    detailHero(id);
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
            question.type.question_type === "text" ? (
              <QuestionText data={index} key={index} />
            ) : question.type.question_type === "multiple" ? (
              <QuestionMultiple data={index} key={index} />
            ) : (
              <QuestionSimple data={index} key={index} />
            )
          )}
      </div>
    </div>
  );
};

export default ViewQuiz;
