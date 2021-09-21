import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import List from "./listado";

const Home = () => {

  return (
    <div className={styles.container}>
        <h3>Bienvenido a QuizMaker, con esta app podrás crear tanto encuestas como exámenes online con la posibilidad de agregar preguntas con respuestas seleccion multiple, simple o texto</h3>
        <Link to="./create">
            <button className={styles.Button} >Crear encuesta</button>
        </Link>
        <p>Encuestas creadas:</p>
        <List />
    </div>
  );
};

export default Home;
