import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { TodoX } from "./components/todos";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <TodoX />
  </Provider>
);

render(<App />, document.getElementById("root"));
