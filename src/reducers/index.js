import { combineReducers } from "redux";
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  COUNT_UP,
  COUNT_DOWN,
  VisibilityFilters
} from "../actions";

const { SHOW_ALL } = VisibilityFilters;

function counter(state = 0, action) {
  switch (action.type) {
    case COUNT_UP:
      return state + 1;

    case COUNT_DOWN:
      return state - 1;

    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          completed: false
        }
      ];

    case TOGGLE_TODO:
      return state.map(
        (todo, index) =>
          todo.id === action.id
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
      );

    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  counter
});

export default todoApp;
