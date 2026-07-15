import React from 'react'
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa'



const SearchBar = ({searchBtn}) => {
    return (
        <div>
           { searchBtn ?  <div className="searchbarr">

                <input
                    type="search"
                    placeholder="Search..."
                    name="search"
                    id="" />
                <button className='search-btn2'><FaSearch /></button>
                
            </div> : "" }
        </div>
    )
}

export default SearchBar