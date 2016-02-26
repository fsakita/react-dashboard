/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.scss';
import { Link, IndexLink } from 'react-router';

class Sidebar extends Component {

  static propTypes = {
    open: PropTypes.bool,
    static: PropTypes.bool,
    onSetOpen: React.PropTypes.func
  };

  static defaultProps = {
    open: false,
    static: false,
    onSetOpen: () => {}
  };

  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    if (!this.props.open) {
      this.props.onSetOpen(true);
    }
  }

  onMouseLeave() {
    if (this.props.open) {
      this.props.onSetOpen(false);
    }
  }

  render() {
    return (
      <nav className={s.root} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <IndexLink className={s.brand} to="/">
          <img src={require('./logo-small.png')} width="38" height="38" alt="React" />
          <span className={s.brandTxt}>Your Company</span>
        </IndexLink>
        <h3>Sidebar</h3>
        <ul className={s.nav}>
          <li><Link to="/app/dashboard">Dashboard</Link></li>
          <li><Link to="/app/privacy">Privacy</Link></li>
          <li><Link to="/app/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    );
  }

}

export default withStyles(Sidebar, s);
