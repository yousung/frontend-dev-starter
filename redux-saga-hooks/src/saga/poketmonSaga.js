import {all, call, put, fork, take, select, delay} from 'redux-saga/effects';
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
    yield put(commonActions.showMessage('로딩중'))
    yield delay(200);
    const {
      poketmon: {limit, page, list},
    } = yield select();

    // 기존에 등록된 포켓몬이 없을 경우 API 를 불러옴
    let poketmons = list;
    if(!list.length) {
      const { data } = yield call(() => api.getPoketmons());
      poketmons = data;
      yield put(poketmonActions.setList(poketmons));
    }

    const start = (limit * (page - 1));
    const results = poketmons.slice(start, start + limit);
    yield put(poketmonActions.setPoketmonList(results));
    yield put(commonActions.showMessage('로딩완료'));
    yield put(commonActions.setLoading(false));
  }
}

export default function* watcher() {
  yield all([fork(fetchData)]);
}
