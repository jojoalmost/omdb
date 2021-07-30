import {combineReducers} from 'redux';
import main from "./main/reducers"
import movies from "./movies/reducers";

const rootReducer = combineReducers({main, movies});

export default rootReducer;
