import { call, all, put, fork, take, debounce } from 'redux-saga/effects';
import { actions } from '../modules/todo';
import { setText } from '../modules/todo';

export function* addTodo(action) {}

export default function* watcher() {
  yield all([debounce(500, actions.ADD_TODO, addTodo)]);
}
