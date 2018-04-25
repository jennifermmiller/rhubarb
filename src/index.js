import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './App';
import Timeline from './Timeline';
import Compose from './Compose';
import { twReducer } from './Reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  combineReducers({
    tw : twReducer,
    routing : routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
          <IndexRoute component={Timeline} />
          <Route path="timeline" component={Timeline} />
          <Route path="compose" component={Compose} />
      </Route>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
