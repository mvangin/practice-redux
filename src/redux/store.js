import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import listingsReducer from "./listingsReducer";

const reducer = combineReducers({
    listings: listingsReducer
})

let store = createStore(reducer, applyMiddleware(thunk));

export default store;