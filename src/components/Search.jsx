//seach component to search movie using tmbd api
const Search = ({ searchTerm, setSearchTerm}) => {
  
    return (
    <div className='search'>
        <div>
            <img src="search.svg" alt="search" />

            <input 
                type="text" 
                placeholder="Search through thousands of movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value) }
            />
        </div>
    </div>
  )
}

export default Search