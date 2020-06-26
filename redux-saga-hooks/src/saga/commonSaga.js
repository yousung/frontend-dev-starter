import {all, put, delay, debounce} from 'redux-saga/effects';
import {actions, types} from '../module/common';

export function* showMessage(action) {
  yield put(actions.setMessage(action.message));
  yield delay(5000);
  yield put(actions.setMessage(''));
}

export default function* watcher() {
  yield all([debounce(500, types.SHOW_MESSAGE, showMessage)]);
}
