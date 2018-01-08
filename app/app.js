import 'babel-polyfill';
import createRoutes from 'frontend/shared-fe/routes';
import configureStore from 'frontend/shared-fe/store/configureStore';
import Immutable from 'immutable';
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';

let reduxState = {};

if (window.__REDUX_STATE__) {
  try {
    let plain = JSON.parse(unescape(__REDUX_STATE__));
    _.each(plain, (val, key) => {
      reduxState[key] = Immutable.fromJS(val)
    })
  } catch (e) {
  }
}

const store = configureStore(reduxState);

ReactDOM.render((
  <Provider store={store}>
    { createRoutes(browserHistory) }
  </Provider>
), document.getElementById('root'));
