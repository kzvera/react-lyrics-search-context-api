import { SEARCH_SONGS, GET_MORE_SONGS, SET_LOADING, GET_LYRICS, CLEAR_LYRICS } from "../types";

const SongsReducer = (state, action) => {
    switch(action.type) {
        case SEARCH_SONGS:
            return {
                ...state,
                loading: false,
                songs: action.payload.data,
                pagination: {
                    next: action.payload.next !== null ? action.payload.next : null,
                    prev: action.payload.prev !== null ? action.payload.prev : null
                }
            }
        case GET_MORE_SONGS:
            return {
                ...state,
                loading: false,
                songs: action.payload.data,
                pagination: {
                    next: action.payload.next !== null ? action.payload.next : null,
                    prev: action.payload.prev !== null ? action.payload.prev : null
                }
            }
        case GET_LYRICS:
            return {
                ...state,
                loading: false,
                lyrics: action.payload
            }
        case CLEAR_LYRICS:
            return {
                ...state,
                lyrics: null
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default SongsReducer