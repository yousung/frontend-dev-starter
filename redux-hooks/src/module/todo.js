import uuid from "react-uuid";
import createReducer from "../common/createReducer";

export const types = {
  ADD_TODO: "todo/ADD_TODO",
  REMOVE_TODO: "todo/REMOVE_TODO",
  TOGGLE_TODO: "todo/TOGGLE_TODO",
};

export const actions = {
  addTodo: (text) => ({
    type: types.ADD_TODO,
    todo: {
      id: uuid(),
      done: false,
      todo: text,
    },
  }),
  removeTodo: (id) => ({ type: types.REMOVE_TODO, id }),
  toggleTodo: (id) => ({ type: types.TOGGLE_TODO, id }),
};

const initState = { todos: [] };
const reducer = createReducer(initState, {
  [types.ADD_TODO]: (state, action) => state.todos.push(action.todo),
  [types.REMOVE_TODO]: (state, action) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.id);
  },
  [types.TOGGLE_TODO]: (state, action) => {
    const index = state.todos.findIndex((todo) => todo.id === action.id);
    if (index !== -1) {
      state.todos[index].done = !state.todos[index].done;
    }
  },
});

export default reducer;
