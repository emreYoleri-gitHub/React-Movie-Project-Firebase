import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import dataReducer from "./dataReducer";
const reducers = combineReducers({
    movieReducer,
    dataReducer
})

export default reducers