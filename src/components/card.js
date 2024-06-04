import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="relative w-full h-96 bg-gray-800 overflow-hidden rounded-lg shadow-lg">
      <img
        src={movie.image}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm">Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
