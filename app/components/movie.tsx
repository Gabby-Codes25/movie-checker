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
    <div className="">
      <div className="w-full flex py-3 md:py-7 px-3 md:px-14 items-center justify-between">
        <h1 className="md:text-2xl text-l font-bold font-sans">Movie Checker</h1>
        <Search onSearch={fetchMovies} />
      </div>
        
        {loading ? (
          <p>Loading movies...</p>
        ) : (
          <div className="w-full flex flex-wrap gap-4 px-4 py-4">
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
  );
}

export default Movie