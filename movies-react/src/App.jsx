import React, { useState, useEffect } from 'react'
import Search from './components/Search';
import Loading from './components/Loading';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use'
import { getTrendingMovies, updateSearchCount } from './api';

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 1000, [searchTerm]);

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error('error');
      }

      const data = await response.json();

      if (data.Response === 'False') {
        setErrorMessage(data.Error || "Error with fetching movies.(data)");
        setMovies([]);
        return
      }
      
      setMovies(data.results || []);
      
      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
      
    } catch (error) {
      console.error(`Fetching error: ${error}`);
      setErrorMessage("Error with fetching movies.")
    } finally {
      setIsLoading(false);
    }
  }
  
  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
      
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    loadTrendingMovies();
  }, [])
  
  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]); // this will run everytime searchbar is changed
  
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Withot the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
          <section className='trending'>
            <h2>Top 5 movies</h2>
            
            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
      
                </li>
              ))}
            </ul>
          </section>
        )}
        
        <section className="all-movies px-4">
          <h2>All Movies</h2>

          {isLoading ? (
            <Loading />
            ) : errorMessage ? (
              <p className="text-red-700">{errorMessage}</p>
              ) : (
                <ul>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App
