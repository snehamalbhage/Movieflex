import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './card';

const API_KEY = 'cff66797b90175b3081088dd1a517629';
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={{
            title: movie.title,
            image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            rating: movie.vote_average,
          }}
        />
      ))}
    </div>
  );
};

export default MovieList;
