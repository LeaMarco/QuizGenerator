import React from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div className={styles.container}>
        <Link style={{textDecoration: "none"}} to="/home">
            <h1 className={styles.logo}>QuizMaker</h1>
        </Link>
    </div>
  );
};

export default Nav;
