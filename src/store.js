import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { moviesReducer } from "./reducers/moviesReducer";

export const store = createStore(moviesReducer, applyMiddleware(thunk));
