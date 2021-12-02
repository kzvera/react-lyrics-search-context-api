import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { SongsContext } from '../../context/songs/songs-context';
import Spinner from '../layout/Spinner';

const LyricItem = () => {
    const params = useParams();
    const navigate = useNavigate();
    const songsContext = useContext(SongsContext);
    const { lyrics, loading } = songsContext;

    useEffect(() => {
        if (lyrics === null && !loading) {
            navigate('/', { replace: true });
        }
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div id="lyrics" className="container">
                <h2><strong>{params.artist}</strong> - {params.songTitle}</h2>
                <span>{!lyrics ? "Sorry, no lyrics were found." : lyrics}</span>
            </div>
        )
    }

}

export default LyricItem