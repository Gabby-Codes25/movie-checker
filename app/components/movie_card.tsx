"use client"

import React from 'react'


type Movie = {
    poster: any,
    title: string,
    year: number,
};

const movie_card = ({ poster, title, year, } : Movie) => {
  return (
    <div>
        <div className='rounded-lg p-4 m-4 shadow-lg font-bold text-gray-300'>
          {
            poster !== "N/A" 
            ? 
            <img src={poster} alt={title} className="w-full h-auto mb-4 rounded-lg bg-cover" /> 
            : 
            <div className='w-full h-64 bg-gray-200 flex items-center justify-center mb-4 rounded-lg'>No Image Available</div>
          }
          <h2>Title: {title}</h2>
          <p>Year produced: {year}</p>
        </div>
    </div>
  )
}

export default movie_card