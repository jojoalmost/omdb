import {combineReducers} from 'redux';
import moviesActionType from "./types";
import {initStateMovieDetail} from "../../utils/defaultState";

const initialState = {
    modal: {
        title: '',
        path: '',
    },
    movies: [],
    detail: {initStateMovieDetail},
}
const modal = (state = initialState.modal, {type, payload}) => {
    switch (type) {
        case moviesActionType.SET_MODAL_POSTER:
            return payload;
        default:
            return state;
    }
}

const movies = (state = initialState.movies, {type, payload}) => {
    switch (type) {
        case moviesActionType.SET_MOVIES_LIST:
            return payload;
        default:
            return state;
    }
}

const detail = (state = initialState.movies, {type, payload}) => {
    switch (type) {
        case moviesActionType.SET_MOVIE_DETAIL:
            return payload;
        default:
            return state;
    }
}

const reducer = combineReducers({
    modal, movies, detail,
});

export default reducer;



