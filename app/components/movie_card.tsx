"use client"

import React from 'react'


type Movie = {
    poster: any,
    title: string,
    year: number,
};

const movie_card = ({ poster, title, year }: Movie) => {
  return (
    <div className='w-full max-w-xs mx-auto'>
      <div className="w-[300px] bg-gray-300 text-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center">
        {poster !== "N/A" ? (
          <img
            src={poster}
            alt={title}
            className="w-full h-48 sm:h-56 md:h-64 object-fill mb-2 overflow-hidden rounded-lg bg-gray-800"
          />
        ) : (
          <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 flex items-center justify-center mb-2 rounded-lg text-gray-600">
            No Image Available
          </div>
        )}
        <h2 className="text-lg md:text-xl text-center mb-2 break-words">
          {title}
        </h2>
        <p className="text-sm md:text-base text-center">
          Year produced: {year}
        </p>
      </div>
    </div>
  );
};

export default movie_card