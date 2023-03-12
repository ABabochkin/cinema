import styles from "../header/header.module.scss";
import AppContext from "../../context/AppContext";
import { useContext } from "react";

const Header = () => {
  const { userInput, topFilms, handleInput, searchMovie } =
    useContext(AppContext);

  return (
    <header className={styles.header}>
      <div onClick={topFilms} className={styles.logot}>
        B
      </div>
      <div>
        <img
          className={styles.search}
          width={30}
          height={30}
          src="/img/Vector.svg"
          alt="search"
          onClick={() => {
            searchMovie(userInput);
          }}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Введите название фильма"
          value={userInput}
          onChange={handleInput}
        />
      </div>
      <img className={styles.img} width={55} src="img/asap.jpeg" alt="logo" />
    </header>
  );
};

export default Header;
