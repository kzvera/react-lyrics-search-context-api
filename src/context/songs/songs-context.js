import { createContext } from "react";

const songsContext = {
    songs: null,
    pagination: null,
    lyrics: null,
    loading: null,
    error: null,
    searchSongs: () => {},
    setLoading: () => {},
    getLyrics: () => {},
    clearLyrics: () => {}
}

export const SongsContext = createContext(songsContext);