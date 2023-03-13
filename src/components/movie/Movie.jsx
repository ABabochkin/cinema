import React from "react";
import styles from "../movie/movie.module.scss";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const { movie, fetchMovie } = props;

  return (
    <Link to="/film">
      <div
        className={styles.movie}
        id={movie.filmId}
        onClick={() => fetchMovie(movie.filmId)}
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
    </Link>
  );
};

export default Movie;
