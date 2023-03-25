import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async function () {
    let response = await fetch(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1",
      {
        headers: {
          "X-API-KEY": "5dcce76a-b7c6-4b1e-b94b-7f04d055b7e4",
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.json();

    return data;
  }
);
