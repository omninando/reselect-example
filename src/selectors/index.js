import { createSelector } from "reselect";

export const getVisibleTodos = createSelector(
  state => state.visibilityFilter,
  state => state.todos,
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case "SHOW_COMPLETED":
        return todos.filter(t => t.completed);
      case "SHOW_ACTIVE":
        return todos.filter(t => !t.completed);
      case "SHOW_ALL":
      default:
        return todos;
    }
  }
);

export const getVisibleTodoById = createSelector(
  getVisibleTodos,
  (_, props) => props.id,
  (visibleTodos, id) => visibleTodos.find(todo => todo.id === id)
);
