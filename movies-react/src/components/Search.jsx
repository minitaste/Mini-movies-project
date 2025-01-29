import React from 'react'

const Search = ({ searchTerm, setSearchTerm}) => {
  return (
      <div className='search'>
          <div>
              <img src="search.svg" alt="search" />

              <input
                  type="text"
                  placeholder='Search a movie...'
                  onChange={(dwd) => setSearchTerm(dwd.target.value)}
              />
          </div>
      </div>
  )
}

export default Search