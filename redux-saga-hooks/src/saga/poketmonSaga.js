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
    yield put(commonActions.showMessage('정보를 불러오는 중'));
    const {
      poketmon: {limit, page},
    } = yield select();
    const {
      data: {results},
    } = yield call(() => api.getPoketmon({limit, offset: limit * (page - 1)}));
    yield put(poketmonActions.setPoketmonList(results));
    yield put(commonActions.showMessage('로딩완료'));
    yield put(commonActions.setLoading(false));
  }
}

export default function* watcher() {
  yield all([fork(fetchData)]);
}
