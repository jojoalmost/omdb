import {combineReducers} from 'redux';
import moviesActionType from "./types";
import {initStateMovieDetail} from "../../utils/defaultState";

const initialState = {
    modal: {
        title: '',
        path: '',
    },
    list: [],
    totalPage: 0,
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

const list = (state = initialState.list, {type, payload}) => {
    switch (type) {
        case moviesActionType.SET_MOVIES_LIST:
            return payload.Search;
        case moviesActionType.MERGE_MOVIES_LIST:
            return [...state, ...payload.Search];
        default:
            return state;
    }
}

const totalPage = (state = initialState.totalPage, {type, payload}) => {
    switch (type) {
        case moviesActionType.SET_MOVIES_LIST:
            const {totalResults = 0, Search = []} = payload;
            const totalPage = Math.ceil(Number(totalResults) / Search.length);
            return totalPage;
        default:
            return state;
    }
}

const detail = (state = initialState.detail, {type, payload}) => {
    switch (type) {
        case moviesActionType.SET_MOVIE_DETAIL:
            return payload;
        default:
            return state;
    }
}

const reducer = combineReducers({
    modal, list, detail, totalPage,
});

export default reducer;



