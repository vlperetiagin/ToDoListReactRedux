import { createStore } from "redux";
import { todosReducer } from "./reducer";

const preloadedState = {
  todos: []
};

const store = createStore(todosReducer, preloadedState);

export default store;
