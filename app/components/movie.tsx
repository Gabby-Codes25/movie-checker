"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import Movie_card from './movie_card';
import Search from './search';

const Movie = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async (term: string) => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=27eecc70&s=${term}`);
        const data = await response.json()
        setMovies(data.Search || []);
        console.log("movies set:", data.Search);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
      fetchMovies("Avengers")
    }, [])

    return (
    <div className="w-full bg-gray-400 text-gray-800 flex justify-between px-8 py-6">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold">Movie Checker</h1>
        <Search onSearch={fetchMovies} />
        
        {loading ? (
          <p>Loading movies...</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-7xl mt-4">
            {movies.map((movie: any) => (
              <Movie_card
                key={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                year={movie.Year}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Movie