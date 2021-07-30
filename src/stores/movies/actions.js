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