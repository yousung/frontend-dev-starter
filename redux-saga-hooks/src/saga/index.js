import {all, fork} from 'redux-saga/effects';
import poketmonSaga from './poketmonSaga';
import commonSaga from './commonSaga';

export default function* rootSaga() {
  yield all([fork(poketmonSaga), fork(commonSaga)]);
}
