import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import "./App.css";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav>
      <h2>MovieDB</h2>
      <h3>List of movies : {movies.length}</h3>
    </nav>
  );
};

export default Nav;
