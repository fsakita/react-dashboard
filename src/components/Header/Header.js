import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import { IndexLink } from 'react-router';

class Header extends Component {

  static contextTypes = {
    onSidebarStaticToggle: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.onSidebarToggleClick = this.onSidebarToggleClick.bind(this);
  }

  onSidebarToggleClick() {
    this.context.onSidebarStaticToggle();
  }

  render() {
    return (
        <div className={s.root}>
          <a href="#" onClick={this.onSidebarToggleClick}>Toggle</a>
          Header text and Navigation
        </div>
    );
  }

}

export default withStyles(Header, s);
