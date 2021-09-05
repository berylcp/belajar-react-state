import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="movieList">
      <ul>
        {movies.map((movie) => (
          <li>
            <Movie name={movie.name} price={movie.price} key={movie.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
