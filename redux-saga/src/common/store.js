import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import timelineSaga from '../timeline/state/saga';
import timelineReducer from '../timeline/state';
import friendReducer from '../friend/state';

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const sagaMiddleware = createSagaMiddleware();

console.log(!!window.__REDUX_DEVTOOLS_EXTENSION__);

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    !!window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
sagaMiddleware.run(timelineSaga);
