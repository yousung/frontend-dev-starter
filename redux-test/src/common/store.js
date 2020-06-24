import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from '../modules/counter';
import todoReducer from '../modules/todo';
import createSagaMiddleware from 'redux-saga';
import todoSaga from '../saga/todoSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), composeWithDevTools()),
);

export default store;
sagaMiddleware.run(todoSaga);
