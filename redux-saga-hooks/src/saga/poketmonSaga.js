import {all, call, put, fork, take, select} from 'redux-saga/effects';
import {
  actions as poketmonActions,
  types as poketmonTypes,
} from '../module/poketmon';
import {actions as commonActions} from '../module/common';
import api from '../module/api';

export function* fetchData(_) {
  while (true) {
    yield take(poketmonTypes.CALL_POKETMON_LIST);
    yield put(commonActions.setLoading(true));
    const {
      poketmon: {limit, page},
    } = yield select();
    const {
      data: {results},
    } = yield call(() => api.getPoketmon({limit, offset: limit * page}));
    yield put(poketmonActions.setPoketmonList(results));
    yield put(commonActions.setLoading(false));
  }
}

export default function* watcher() {
  yield all([fork(fetchData)]);
}
