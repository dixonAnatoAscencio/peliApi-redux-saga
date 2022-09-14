import { createSlice } from "@reduxjs/toolkit";


//Defino estado inicial de mi componente movie
const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    movie: {},
  },
  reducers: {
    getMovies(name) {
      return name;
    },
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },
    getMovie(id) {
      return id;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { getMovies, setMovies, setMovie, getMovie } = movieSlice.actions;

export default movieSlice.reducer;
