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
import axios from "axios"

const CreateQuiz = () => {
  const dispatch = useDispatch();
  let estado = useSelector((state) => state);
  const [type, setType] = useState("");
  const [isOpen, setOpen] = useState(false);
  const types= ["text", "single", "multiple"]

  const createQuiz = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/create",estado).then(response=>alert(response.data)).catch(e=>alert(e))
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <span className={styles.topLine} />
        <div className={styles.top}>
          <p className={styles.title}>Creación de encuesta</p>
        </div>
        <form action="">
          <p>Title</p>
          <input
            type="text"
            onChange={(e) => dispatch(modifyTitle(e.target.value))}
          />
          <p>Description</p>
          <input
            type="text"
            onChange={(e) => dispatch(modifyDescription(e.target.value))}
          />

<div className={styles.amountButton} onClick={() => setOpen(!isOpen)}>
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
              className={styles.resourceSelect}
              style={isOpen ? { position: "absolute" } : { display: "none"}}
            >
            {types.map(type => <p onClick={() => {setType(`${type}`); setOpen(false)}} key={type}>{type}</p> )}
            
          </div>

          <button onClick={(e) => {e.preventDefault();dispatch(addQuestion(type, "holaaaa"))}}>
            agregar pregunta
          </button>

          {estado.questions?.length &&
            estado.questions.map((question, index) =>
              question.question_type === "text" ? (
                <CreateQuestionText data={index} key={index} />
              ) : (
                <CreateQuestionOptions data={index} key={index} />
              )
            )}
        </form>
        <button onClick={(e) => {createQuiz(e)}}>
            Crear encuesta
        </button>
      </div>
      <PreviewQuiz />
    </div>
  );
};

export default CreateQuiz;
