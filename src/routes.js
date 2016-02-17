/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { IndexRoute, Route } from 'react-router';
import fetch from './core/fetch';
import App from './components/App';
import DashboardView from './views/DashboardView';
import ContentView from './views/ContentView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView';

async function getContextComponent(location, callback) {
  const response = await fetch(`/api/content?path=${location.pathname}`);
  const content = await response.json();
  // using an arrow to pass page instance instead of page class; cb accepts class by default
  callback(null, () => <ContentView {...content} />);
}

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={DashboardView} />
      <Route path="login" component={LoginView} />
      <Route path="about" getComponent={getContextComponent} />
      <Route path="privacy" getComponent={getContextComponent} />
    </Route>
    <Route path="*" component={NotFoundView} />
  </Route>
);
