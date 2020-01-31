import React from "react";

export const TodoListItem = (props) => {
  return (
    <li className="todo-item">{props.todo.title}</li>
  );
}