
export const allTodos = (state) => {
  const todosArr = Object.keys(state.todos).map( todoId => {
    return state.todos[todoId];
  });

  return todosArr;
};