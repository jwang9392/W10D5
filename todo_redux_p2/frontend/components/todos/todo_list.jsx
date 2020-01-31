import React from "react";
import {TodoListItem} from './todo_list_item';
import TodoForm from "./todo_form";

const todoList = (props) => {
  return (
    <>
      <ul>
        <h4>Todo List</h4>
        {props.todos.map(todo => (
          <TodoListItem todo={todo} key={todo.id}/>
        ))}
      </ul>
      < TodoForm receiveTodo={props.receiveTodo}/>
    </>
  );
};

export default todoList;