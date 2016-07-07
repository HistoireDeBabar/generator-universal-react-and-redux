// Uses React Router as a wrapper to our components.
import React     from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import AppShell from './containers/AppShell';

// Polyfill for server side rendering of application
if (typeof require.ensure !== 'function') {
  require.ensure = require('isomorphic-ensure')({
    // If you require local files, pass the current location:
    dirname: __dirname,
  });
}
/**
 * uses react-router-proxy to load in dependencies when needed.
 */
export default (
   // App Shell
   <Route component={AppShell} path='/'>
    // Home Page (Index /)
    <IndexRoute getComponent={(next, cb) => {
      require.ensure([], (require) => {
        cb(null, require('./containers/Home'));
      });
    }}/>
    // Other Pages.
  </Route>
);
