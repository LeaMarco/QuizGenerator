import React, { useEffect, useState } from "react";
import styles from "./listado.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";



const List = () => {
  const [estado, setEstado] = useState("");
  const quizList = () => {
    axios.get(`http://localhost:3001/list/`)
      .then((response) => setEstado(response.data));
  };
  
  useEffect(() => {
    quizList();
    return () => {
      setEstado("");
    };
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.topLine} />
      {estado.length ? estado.map(quiz=>
        <div className={styles.top}>
          <div className={styles.info}>
            <p className={styles.title}>{quiz.name}</p>
            <p className={styles.description}>{quiz.description}</p>
          </div>
            <Link to={`./detail/${quiz.id}`}>
            <button className={styles.Button}>Ver encuesta</button>
            </Link>
        </div>
    ): typeof(estado)=== "string" ? <Spinner animation="border" variant="light" style={{marginTop: "30%"}}/>:
    <p className={styles.description}>Aún no se han creado encuestas</p>
    }
      
    </div>
  );
};

export default List;
