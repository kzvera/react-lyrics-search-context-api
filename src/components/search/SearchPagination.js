import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SongsContext } from '../../context/songs/songs-context'

const SearchPagination = () => {
    const songsContext = useContext(SongsContext);
    const { pagination, loading, lyrics } = songsContext;

    const navigate = useNavigate();

    const onGetNextSongsHandler = (e) => {
        songsContext.getMoreSongs(pagination.next);
    }

    const onGetPrevSongsHandler = (e) => {
        songsContext.getMoreSongs(pagination.prev);
    }

    const onClickBackHandler = (e) => {
        navigate(-1);
        songsContext.clearLyrics();
    }

    return (
        !loading && pagination !== null && (pagination.next !== null || pagination.prev !== null) && (
            <div id="more" className="container centered">
                {lyrics === null && pagination.prev && <button className="btn" onClick={onGetPrevSongsHandler}>Prev</button>}
                {lyrics === null && pagination.next && <button className="btn" onClick={onGetNextSongsHandler}>Next</button>}
                {lyrics !== null && <button className="btn" onClick={onClickBackHandler}>Back</button>}
                
            </div>
        )
    )
}

export default SearchPagination