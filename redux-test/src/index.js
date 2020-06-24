import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './common/store';
import CounterContainer from './container/CounterContainer';
import TodoContainer from './container/TodoContainer';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <TodoContainer />
    <CounterContainer />
  </Provider>,
  document.getElementById('root'),
);

// serviceWorker.unregister();
