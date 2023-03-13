import React from "react";
import Movie from "../../components/movie/Movie";
import styles from "../home/home.module.scss";

import AppContext from "../../context/AppContext";
import { useContext } from "react";

const Home = (props) => {
  const { movies = [] } = useContext(AppContext);
  const { fetchMovie } = props;

  return (
    <div className={styles.markup}>
      {movies.map((movie) => (
        <Movie key={movie.filmId} movie={movie} fetchMovie={fetchMovie} />
      ))}
    </div>
  );
};

export default Home;
