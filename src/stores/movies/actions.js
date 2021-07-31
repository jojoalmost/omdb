import moviesActionType from "./types";

export const setModalPoster = (payload) => {
    return {
        type: moviesActionType.SET_MODAL_POSTER,
        payload,
    }
}

export const setMovieDetail = (payload) => {
    return {
        type: moviesActionType.SET_MOVIE_DETAIL,
        payload,
    }
}

export const setMoviesList = (payload) => {
    return {
        type: moviesActionType.SET_MOVIES_LIST,
        payload,
    }
}

export const mergeMoviesList = (payload) => {
    return {
        type: moviesActionType.MERGE_MOVIES_LIST,
        payload,
    }
}