import { createStore, combineReducers } from "redux";
import counterReducer from "../module/counter";
import todoReducer from "../module/todo";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
