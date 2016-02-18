/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from '../../../node_modules/isomorphic-style-loader/lib/withStyles';
import s from './LoginView.scss';

const title = 'Login Page';

class LoginView extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className="container text-center mt-lg">
        <h1>{title}</h1>
        <p>Login form</p>
      </div>
    );
  }

}

export default withStyles(LoginView, s);
