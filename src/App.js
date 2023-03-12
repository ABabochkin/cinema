import { useEffect, useState } from "react";
import AppContext from "./context/AppContext";

import axios from "axios";

import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import Movies from "./components/movies/Movies";

import styles from "../src/main.module.scss";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [modal, setModal] = useState(false);
  const [movieModal, setMovieModal] = useState({});

  const closeModal = () => {
    setModal(false);
  };

  const openModal = (id) => {
    setModal(true);
    console.log(id);
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
      headers: {
        "X-API-KEY": "5dcce76a-b7c6-4b1e-b94b-7f04d055b7e4",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovieModal(data));
  };

  // const fetchModalMovie = async (id) => {
  //   openModal(id);
  //   try {
  //     const response = await axios.get(
  //       `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
  //       {
  //         headers: {
  //           "X-API-KEY": "5dcce76a-b7c6-4b1e-b94b-7f04d055b7e4",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     setMovieModal(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchModalMovie();
  // }, []);

  // const fetchModalMovie = async (id) => {
  //   try {
  //     const response = await axios.get(
  //       `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
  //       {
  //         headers: {
  //           "X-API-KEY": "5dcce76a-b7c6-4b1e-b94b-7f04d055b7e4",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     setMovieModal(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const topFilms = () => {
    fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1",
      {
        headers: {
          "X-API-KEY": "5dcce76a-b7c6-4b1e-b94b-7f04d055b7e4",
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
            "X-API-KEY": "5dcce76a-b7c6-4b1e-b94b-7f04d055b7e4",
            "Content-Type": "application/json",
          },
        }
      );
      setMovies(response.data.films);
    } catch (error) {
      console.error("Произошла ошибка", error);
    }
  }

  return (
    <>
      <AppContext.Provider
        value={{
          topFilms,
          userInput,
          handleInput,
          searchMovie,
          movies,
          closeModal,
          movieModal,
        }}
      >
        <div className={styles.main}>
          <Header />
          {modal ? <Modal /> : <Movies openModal={openModal} />}
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;

// "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1",
