import React from 'react';
import {IndexRoute, Route, Router} from 'react-router';
//
import HomeContainer from '../../pages/home/containers/HomeContainer';
import App from '../../shared-fe/containers/App';

export default function (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        {/*<Route path="path" component={PathContainer}/>*/}
        <IndexRoute component={HomeContainer}/>
      </Route>
    </Router>
  )
}
