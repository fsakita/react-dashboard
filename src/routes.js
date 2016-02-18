/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { IndexRoute, Route, IndexRedirect } from 'react-router';
import fetch from './core/fetch';
import App from './components/App';
import DashboardView from './views/DashboardView';
import ContentView from './views/ContentView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView';

async function getContextComponent(location, callback) {
  var paths = location.pathname.split('/');
  const response = await fetch(`/api/content?path=${paths[paths.length - 1]}`);
  const content = await response.json();
  // using an arrow to pass page instance instead of page class; cb accepts class by default
  callback(null, () => <ContentView {...content} />);
}

export default (
  <Route path="/">
    <IndexRedirect to="app/dashboard"></IndexRedirect>
    <Route path="app" component={App}>
      <IndexRedirect to="dashboard"></IndexRedirect>
      <Route path="dashboard" component={DashboardView} />
      <Route path="about" getComponent={getContextComponent} />
      <Route path="privacy" getComponent={getContextComponent} />
    </Route>
    <Route path="login" component={LoginView} />
    <Route path="*" component={NotFoundView} />
  </Route>
);
