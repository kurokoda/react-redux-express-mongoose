import Promise from 'bluebird';
import createRoutes from 'frontend/shared-fe/routes/index';
import configureStore from 'frontend/shared-fe/store/configureStore';
import {createMemoryHistory, useQueries} from 'history';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import {Provider} from 'react-redux';
import {match, RouterContext, useRouterHistory} from 'react-router';

let scriptSrcs;
let styleSrc;

if (process.env.NODE_ENV === 'production') {
  let refManifest = require('../../../rev-manifest.json');
  scriptSrcs      = [
    `/${refManifest['vendor.js']}`,
    `/${refManifest['app.js']}`,
  ];
  styleSrc        = `/${refManifest['css/main.css']}`
} else {
  scriptSrcs = [
    '/vendor.js',
    '/app.js'
  ];
  styleSrc   = '/main.css'
}

export default (req, res, next) => {
  let history  = useRouterHistory(useQueries(createMemoryHistory))();
  let store    = configureStore();
  let routes   = createRoutes(history);
  let location = history.createLocation(req.url);

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    } else if (error) {
      res.status(500).send(error.message)
    } else if (!renderProps) {
      res.status(404).send('Not found')
    } else {
      let [getCurrentUrl, unsubscribe] = subscribeUrl();
      let reqUrl                       = location.pathname + location.search;

      getReduxPromise().then(() => {
        let reduxState = escape(JSON.stringify(store.getState()));
        let metaHeader = Helmet.rewind();
        let html       = ReactDOMServer.renderToString(
          <Provider store={store}>
            { <RouterContext {...renderProps}/> }
          </Provider>
        );
        if (getCurrentUrl() === reqUrl) {
          res.render('index', {metaHeader, html, scriptSrcs, reduxState: null, styleSrc})
        } else {
          res.redirect(302, getCurrentUrl())
        }
        unsubscribe();
      })
      .catch((err) => {
        Helmet.rewind();
        unsubscribe();
        next(err);
      });
      function getReduxPromise() {
        let {query, params} = renderProps;
        let comp            = renderProps.components[renderProps.components.length - 1].WrappedComponent;
        return comp.fetchData ?
          comp.fetchData({query, params, store, history}) :
          Promise.resolve();
      }
    }
  });
  function subscribeUrl() {
    let currentUrl  = location.pathname + location.search;
    let unsubscribe = history.listen((newLoc) => {
      if (newLoc.action === 'PUSH' || newLoc.action === 'REPLACE') {
        currentUrl = newLoc.pathname + newLoc.search
      }
    });
    return [
      () => currentUrl,
      unsubscribe
    ]
  }
}
