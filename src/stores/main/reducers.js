import {combineReducers} from 'redux';
import mainActionType from "./types";

const initialState = {
    loading: false,
    errorMessage: '',
}

const loading = (state = initialState.loading, {type}) => {
    switch (type) {
        case mainActionType.SHOW_LOADING:
            return true;
        case mainActionType.HIDE_LOADING:
            return false;
        default:
            return state;
    }
}

const errorMessage = (state = initialState.errorMessage, {type, payload}) => {
    switch (type) {
        case mainActionType.SET_ERROR_MESSAGE:
            return payload;
        case mainActionType.CLEAR_ERROR_MESSAGE:
            return '';
        default:
            return state;
    }
}

const reducer = combineReducers({
    loading, errorMessage
});

export default reducer;



