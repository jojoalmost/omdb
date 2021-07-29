import {combineReducers} from 'redux';
import moviesActionType from "./types";

const initialState = {
    modal: {
        url: ''
    },
    photos: [],
}
const modal = (state = initialState.modal, {type, payload}) => {
    switch (type) {
        case moviesActionType.SET_MODAL_POSTER:
            return payload;
        default:
            return state;
    }
}

const reducer = combineReducers({
    modal,
});

export default reducer;



