import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../styles";
import { getMovies } from "../redux/feature/movieSlice";

//Componente barra busqueda
const Search = () => {
  const [name, setName] = useState("harry potter");
  const classes = useStyles();
  const {
    moviesList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);
  return (
    <>
      <h2 className={classes.title}>Buscador de peliculas</h2>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="text"
          fullWidth
          value={name}
          sx={{ m: 1, width: "55ch" }}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p className={classes.error}>{error}</p>}
      </form>
    </>
  );
};

export default Search;
