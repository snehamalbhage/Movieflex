import React, { useState, useEffect } from 'react';
import Header from './components/header';
import MovieList from './components/movieList';
import axios from 'axios';

const API_KEY = 'cff66797b90175b3081088dd1a517629';
const BASE_URL = 'https://api.themoviedb.org/3/discover/movie';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState(2012);
  const [loading, setLoading] = useState(false);

  const loadMovies = async (year, genre) => {
    setLoading(true);
    const genreFilter = genre !== 'all' ? `&with_genres=${genre}` : '';
    const API_URL = `${BASE_URL}?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&vote_count.gte=100&page=1${genreFilter}`;

    try {
      const response = await axios.get(API_URL);
      // Sort movies by rating in descending order
      const sortedMovies = response.data.results.sort((a, b) => b.vote_average - a.vote_average);
      // Get top 20 movies
      const top20Movies = sortedMovies.slice(0, 20);
      setMovies(top20Movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMovies([]);
    loadMovies(year, selectedGenre);
  }, [selectedGenre, year]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 10 &&
      !loading
    ) {
      // Load next page of movies
      setYear((prevYear) => prevYear + 1);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const genreFilter = selectedGenre !== 'all' ? `&with_genres=${selectedGenre}` : '';
      const API_URL = `${BASE_URL}?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&vote_count.gte=100&page=1${genreFilter}`;
      
      try {
        const response = await axios.get(API_URL);
        const sortedMovies = response.data.results.sort((a, b) => b.vote_average - a.vote_average);
        const top20Movies = sortedMovies.slice(0, 20);
        setMovies(top20Movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [selectedGenre, year]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, selectedGenre, year]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header onGenreSelect={setSelectedGenre} />
      <main className="container mx-auto px-4 pt-6">
        <h2 className="text-2xl font-bold mb-4"> {year}</h2>
        <MovieList movies={movies} />
      </main>
    </div>
  );
}

export default App;
