import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { SongsContext } from '../../context/songs/songs-context'

const SongItem = ({ song }) => {
    const { artist, title } = song;
    const songsContext = useContext(SongsContext);
    
    const onClickHandler = (e) => {
        songsContext.getLyrics(artist.name, title);
    }

    return (
        <li>
            <span><strong>{artist.name}</strong> - {title}</span>
            <Link className="btn" to={`/${artist.name}/${title}`} onClick={onClickHandler}>Get Lyrics</Link> 
        </li>
    )
}

SongItem.propTypes = {
    song: PropTypes.object.isRequired
}

export default SongItem