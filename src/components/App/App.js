/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './App.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Sidebar from '../Sidebar';
import Content from '../Content';

class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  static contextTypes = {
    insertCss: PropTypes.func,
  };

  render() {
    return (
      <div>
        <Sidebar />
        <Content children={this.props.children} />
      </div>
    );
  }

}

export default withStyles(App, s);
