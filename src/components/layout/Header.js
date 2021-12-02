import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../search/SearchBar'

const Header = () => {
    return (
        <header>
            <Link to="/"><h1>LyricsSearch</h1></Link>
            <SearchBar />
        </header>
    )
}

export default Header