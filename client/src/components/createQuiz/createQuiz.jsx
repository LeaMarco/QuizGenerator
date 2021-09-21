import React from "react";
import { useState } from "react/cjs/react.development";
import {
  addOption,
  addQuestion,
  deleteOption,
  deleteQuestion,
  modifyDescription,
  modifyOption,
  modifyQuestion,
  modifyTitle,
} from "../../actions";
import styles from "./createQuiz.module.css";
import { useDispatch, useSelector } from "react-redux";
import PreviewQuiz from "./previewQuiz";
import CreateQuestionText from "./createQuestionText";
import CreateQuestionOptions from "./createQuestionOptions";
import axios from "axios";
import { readyToCreate } from "../../utils";

const CreateQuiz = () => {
  const dispatch = useDispatch();
  let estado = useSelector((state) => state);
  const [type, setType] = useState("");
  const [isOpen, setOpen] = useState(false);
  const types = ["text", "single", "multiple"];

  const createQuiz = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/create", estado)
      .then((response) => alert(response.data))
      .catch((e) => alert(e));
  };

  

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <span className={styles.topLine} />
        <div className={styles.top}>
          <p className={styles.title}>Creación de encuesta</p>
        </div>
        <form
          onSubmit={(e) => {
            createQuiz(e);
          }}
        >
          <h3>Título:</h3>
          <input
            type="text"
            onChange={(e) => dispatch(modifyTitle(e.target.value))}
            required
          />
          <h3>Descripción:</h3>
          <input
            type="text"
            onChange={(e) => dispatch(modifyDescription(e.target.value))}
            required
          />

          {estado.questions?.length > 0 &&
            estado.questions.map((question, index) =>
              question.question_type === "text" ? (
                <CreateQuestionText data={index} key={index} />
              ) : (
                <CreateQuestionOptions data={index} key={index} />
              )
            )}
          <div className={styles.selectButtonContainer}>
            <div className={styles.typeSelectContainer}>
              <div
                className={styles.typeSelect}
                onClick={() => setOpen(!isOpen)}
              >
                <div>{type.length > 2 ? type : "Seleccionar tipo"}</div>
                <div className={styles.arrowContainer}>
                  <div className={isOpen ? styles.arrowClose : styles.arrow} />
                  <div
                    className={isOpen ? styles.arrow : styles.arrowClose}
                    style={{ marginLeft: "-3px" }}
                  />
                </div>
              </div>
              <div
                className={styles.typesMenu}
                style={isOpen ? { position: "absolute" } : { display: "none" }}
              >
                {types.map((type) => (
                  <p
                    onClick={() => {
                      setType(`${type}`);
                      setOpen(false);
                    }}
                    key={type}
                  >
                    {type}
                  </p>
                ))}
              </div>
            </div>

            {type ? (
              <button
                className={styles.Button}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addQuestion(type, ""));
                }}
              >
                agregar pregunta
              </button>
            ) : (
              <button
                className={styles.Button}
                onClick={() => alert("Selecciona un tipo de pregunta primero")}
              >
                agregar pregunta
              </button>
            )}
          </div>

          {!readyToCreate(estado).length? (
            <button type="submit" className={styles.Button}>
              Crear encuesta
            </button>
          ) : readyToCreate(estado).map(error => <p>{error}</p>)}
        </form>
      </div>
      <PreviewQuiz />
    </div>
  );
};

export default CreateQuiz;
