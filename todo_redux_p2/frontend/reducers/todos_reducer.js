import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import { merge } from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

export const todosReducer = (state = initialState, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach(todo => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      debugger
      const {id, title, body, done} = action.todo;
      debugger
      const newItem = {[id]: {id: id, title: title, body: body, done: done}};
      const newerState = merge({}, state, newItem);
      return newerState;
    default:
      return state;
  }
};

