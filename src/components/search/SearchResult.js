import React, { useContext } from 'react'

import { SongsContext } from '../../context/songs/songs-context';
import SongItem from '../songs/SongItem';
import Spinner from '../layout/Spinner'

const SearchResult = () => {
    const songsContext = useContext(SongsContext);
    const { songs, loading } = songsContext;

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div id="result" className="container">
                {!loading && songs === null && <p>Results will be displayed here.</p>}
                {!loading && songs !== null && (
                    <ul className="songs">
                        {songs.map(song => <SongItem song={song} key={song.id} />)}
                    </ul>
                )}
            </div>
        )
    }
}

export default SearchResult