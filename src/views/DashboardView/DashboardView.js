import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DashboardView.scss';

const title = 'Dashboard';

class DashboardView extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className="container">
        <h1>{title}</h1>
      </div>
    );
  }

}

export default withStyles(DashboardView, s);
