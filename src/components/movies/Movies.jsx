import React from "react";
import Movie from "../movie/Movie";
import styles from "../movies/movies.module.scss";

import AppContext from "../../context/AppContext";
import { useContext } from "react";

const Movies = (props) => {
  const { movies = [] } = useContext(AppContext);
  const { openModal } = props;

  return (
    <div className={styles.markup}>
      {movies.map((movie) => (
        <Movie key={movie.filmId} movie={movie} openModal={openModal} />
      ))}
    </div>
  );
};

export default Movies;
