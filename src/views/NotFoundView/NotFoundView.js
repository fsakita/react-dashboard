import React, { Component, PropTypes } from 'react';
import withStyles from '../../../node_modules/isomorphic-style-loader/lib/withStyles';
import s from './NotFoundView.scss';

const title = 'Page Not Found';

class NotFoundView extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
    this.context.onPageNotFound();
  }

  render() {
    return (
      <div>
        <h1>{title}</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
    );
  }

}

export default withStyles(NotFoundView, s);
