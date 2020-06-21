import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './common/store';
// import * as serviceWorker from './serviceWorker';

import TimelineMain from './timeline/container/TimelineMain';
import FriendMain from './friend/container/FriendMain';

ReactDOM.render(
  <Provider store={store}>
    <FriendMain />
    <TimelineMain />
  </Provider>,
  document.getElementById('root')
);

// serviceWorker.unregister();
