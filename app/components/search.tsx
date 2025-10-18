"use client"

import React from 'react'
import { useState } from 'react'

type SearchProps = {
  onSearch: (term: string) => void;
};

const search = ({onSearch}: SearchProps) => {
  const [term, setTerm] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Searching for:", term);
    if (term.trim()) {
      onSearch(term)
    }
    console.log("Searched")
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."   
          className="search-input border-none"
          onChange={(e) => (setTerm(e.target.value)) }
        /> 
        <button type="submit" className='bg-gray-900 text-white py-2 px-6 rounded-lg ml-3 cursor-pointer'>Search</button>
      </form>
    </div>
  )
}

export default search