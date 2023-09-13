import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AppContext from "./context/AppContext";

import axios from "axios";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Film from "./pages/film/Film";

import styles from "../src/main.module.scss";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [idMovie, setIdMovie] = useState({});

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      searchMovie(userInput);
    }
  }

  //xsxsxsxsxs

  const topFilms = () => {
    fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1",
      {
        headers: {
          "X-API-KEY": process.env.REACT_APP_API_KEY,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.films));
  };

  useEffect(() => {
    topFilms();
  }, []);

  async function searchMovie(userInput) {
    try {
      const response = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${userInput}&page=1`,
        {
          headers: {
            "X-API-KEY": process.env.REACT_APP_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      setMovies(response.data.films);
    } catch (error) {
      console.error("Произошла ошибка", error);
    }
  }

  const fetchMovie = async (id) => {
    try {
      let response = await axios.get(
        ` https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
        {
          headers: {
            "X-API-KEY": process.env.REACT_APP_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );
      setIdMovie(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AppContext.Provider
        value={{
          topFilms,
          userInput,
          handleInput,
          searchMovie,
          movies,
          idMovie,
          handleKeyDown,
        }}
      >
        <div className={styles.main}>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home fetchMovie={fetchMovie} />}
            ></Route>
            <Route exact path="/film" element={<Film />}></Route>
          </Routes>
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
