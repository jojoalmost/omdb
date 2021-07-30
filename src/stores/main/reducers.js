import {combineReducers} from 'redux';
import mainActionType from "./types";

const initialState = {
    loading: false,
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

const reducer = combineReducers({
    loading,
});

export default reducer;



