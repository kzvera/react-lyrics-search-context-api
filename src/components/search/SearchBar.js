import React, { useState, useContext } from 'react'
import { SongsContext } from '../../context/songs/songs-context';

const SearchBar = () => {
    const songsContext = useContext(SongsContext);
    const [text, setText] = useState('');

    const onChangeHandler = (e) => {
        setText(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (text === '') {
            alert('Please enter an artist or song name');
        } else {
            songsContext.searchSongs(text);
            setText('');
        }
    }
    return (
        <form onSubmit={onSubmitHandler} id="form">
            <input type="text" id="search" placeholder="Enter artist or song name..." value={text} onChange={onChangeHandler} />
            <button>Search</button>
      </form>
    )
}

export default SearchBar