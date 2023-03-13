import React from "react";
import styles from "../film/film.module.scss";
import AppContext from "../../context/AppContext";
import { useContext } from "react";

const Film = () => {
  const { idMovie = {} } = useContext(AppContext);

  return (
    <div className={styles.main}>
      <div className={styles.mainDescription}>
        <div className={styles.image}>
          <img width={350} height={400} src={idMovie.posterUrl} alt="log" />
        </div>
        <div className={styles.rightInfo}>
          <div className={styles.name}>
            <h1>{idMovie.nameRu}</h1>
          </div>
          <div className={styles.shortDiscription}>
            <ul>
              <li> Рейтинг Кинопоиска - {idMovie.ratingKinopoisk}</li>
              <li>{idMovie.type}</li>
              <li>genres - Драма, Комедия</li>
              <li>Год - {idMovie.year}</li>
              <li>Длина фильма - {idMovie.filmLength} </li>
            </ul>
          </div>
          <div className={styles.btn}>
            <button>Смотреть трейлер</button>
          </div>
        </div>
      </div>
      <div className={styles.description}> {idMovie.description} </div>
    </div>
  );
};

export default Film;
