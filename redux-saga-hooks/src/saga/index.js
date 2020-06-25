import {all, fork} from 'redux-saga/effects';
import poketmonSaga from './poketmonSaga';

export default function* rootSaga() {
  yield all([fork(poketmonSaga)]);
}
