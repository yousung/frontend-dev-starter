import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import poketmonReducer from '../module/poketmon';
import commonReducer from '../module/common';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  poketmon: poketmonReducer,
  common: commonReducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), composeWithDevTools()),
);

export default store;
sagaMiddleware.run(rootSaga);
