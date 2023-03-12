import React from "react";
import styles from "../movie/movie.module.scss";

const Movie = (props) => {
  const { movie, openModal } = props;

  return (
    <div
      className={styles.movie}
      id={movie.filmId}
      onClick={() => openModal(movie.filmId)}
    >
      {movie.rating !== "null" ? (
        <div className={styles.rating}>
          <span className={styles.num}>{movie.rating}</span>
        </div>
      ) : (
        ""
      )}

      <img className={styles.img} src={movie.posterUrl} alt="logo" />
      <div className={styles.prev}>
        <span style={{ color: "white" }}>{movie.nameRu}</span>
        <span style={{ color: "gray" }}>{movie.year}</span>
      </div>
    </div>
  );
};

export default Movie;
