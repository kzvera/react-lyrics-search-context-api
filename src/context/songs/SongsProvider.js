import { useReducer } from "react"

import { SongsContext } from "./songs-context"
import SongsReducer from "./songs-reducer"
import { SEARCH_SONGS, GET_MORE_SONGS, SET_LOADING, GET_LYRICS, CLEAR_LYRICS } from "../types"


const SongsProvider = (props) => {
    const initialState = {
        songs: null,
        pagination: null,
        lyrics: null,
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(SongsReducer, initialState)

    const searchSongs = async text => {
        setLoading();

        try {
            const res = await fetch(`https://api.lyrics.ovh/suggest/${text}`);
            const data = await res.json();
                
            dispatch({
                type: SEARCH_SONGS,
                payload: data
            })
        } catch (error) {
            console.error('Error searching songs: ', error);
        }
    }

    const getMoreSongs = async type => {
        setLoading();

        try {
            const res = await fetch(`https://cors-anywhere.herokuapp.com/${type}`);
            const data = await res.json();

            dispatch({
                type: GET_MORE_SONGS,
                payload: data
            })
        } catch (error) {
            console.error('Error fetching more songs: ', error);
        }
        
    }

    const setLoading = () => dispatch({ type: SET_LOADING });

    const getLyrics = async (artist, songTitle) => {
        setLoading();
    
        try {
            const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`);
            const data = await res.json();

            dispatch({
                type: GET_LYRICS,
                payload: data.lyrics
            })

        } catch (error) {
            console.error('Error fetching lyrics: ', error);
        }
    }

    const clearLyrics = () => {
        dispatch({
            type: CLEAR_LYRICS
        })
    }

    return <SongsContext.Provider value={{
        songs: state.songs,
        lyrics: state.lyrics,
        pagination: state.pagination,
        loading: state.loading,
        searchSongs,
        getMoreSongs,
        setLoading,
        getLyrics,
        clearLyrics
    }}>{props.children}</SongsContext.Provider>
}

export default SongsProvider