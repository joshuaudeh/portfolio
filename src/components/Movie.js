import React from "react";
import styles from "./Project.module.css";

function Movie({ name, image, link }) {
  return (
    <div className={styles.project}>
      <img src={image} alt={name} />
      <p>{name}</p>
      <a
        href="https://github.com/joshuaudeh/movie-app/tree/master/src"
        rel="noreferrer"
        target="_blank"
      >
        view code
      </a>
      <a href={link} target="_blank" rel="noreferrer">
        live site
      </a>
    </div>
  );
}

export default Movie;
