import createReducer from '../common/createReducer';
import uuid from 'react-uuid';

export const actions = {
  ADD_TODO: 'todo/ADD_TODO',
  REMOVE_TODO: 'todo/REMOVE_TODO',
  TOGGLE_TODO: 'todo/TOGGLE_TODO',
  SET_TEXT: 'todo/SET_TEXT',
  TRY_SET_TEXT: 'todo/TRY_SET_TEXT',
};

export const addTodo = (text) => ({
  type: actions.ADD_TODO,
  todo: {
    id: uuid(),
    text,
    done: false,
  },
});
export const removeTodo = (id) => ({ type: actions.REMOVE_TODO, id });
export const toggleTodo = (id) => ({ type: actions.TOGGLE_TODO, id });
export const setText = (text) => ({ type: actions.SET_TEXT, text });
export const trySetText = (text) => ({ type: actions.TRY_SET_TEXT, text });

const INITAL_STATE = { todos: [], text: '' };
const reducer = createReducer(INITAL_STATE, {
  [actions.ADD_TODO]: (state, action) => {
    state.todos.push(action.todo);
  },
  [actions.TOGGLE_TODO]: (state, action) => {
    const index = state.todos.findIndex((todo) => {
      return todo.id === action.id;
    });
    if (index !== -1) {
      state.todos[index].done = !state.todos[index].done;
    }
  },
  [actions.SET_TEXT]: (state, action) => (state.text = action.text),
  [actions.REMOVE_TODO]: (state, action) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.id);
  },
});

export default reducer;
