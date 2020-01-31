import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import {receiveTodo, receiveTodos, fetchTodos} from "./actions/todo_actions";
import Root from "./components/root";
import {allTodos} from "./reducers/selectors";
// import {fetchTodos} from "./util/todo_api_util";


document.addEventListener("DOMContentLoaded", () => {
  window.store = configureStore();
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
  ReactDOM.render(< Root store={store}/>, document.getElementById("root"));
});