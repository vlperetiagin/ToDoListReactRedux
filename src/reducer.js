export const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todos: state.todos.concat(action.task)
      };
    case "REMOVE_TASK":
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.task.id)
      };
    default:
      return state;
  }
};
