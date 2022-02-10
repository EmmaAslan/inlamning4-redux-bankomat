import { createStore, combineReducers } from "redux";
import atmReducer from "./ducks/atm.js";

const reducer = combineReducers({
  atm: atmReducer
});

const store = createStore(reducer);

export default store;
