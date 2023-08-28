import styles from "../header/header.module.scss";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { useContext } from "react";

// Для теста

const Header = () => {
  const { userInput, topFilms, handleInput, searchMovie, handleKeyDown } =
    useContext(AppContext);

  return (
    <header className={styles.header}>
      <Link to="/">
        <div onClick={topFilms} className={styles.logot}>
          B
        </div>
      </Link>

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
          onKeyDown={handleKeyDown}
        />
      </div>
      <Link to="/film">
        <img className={styles.img} width={55} src="img/asap.jpeg" alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
