import React, { Component, PropTypes } from 'react';
import withStyles from '../../../node_modules/isomorphic-style-loader/lib/withStyles';
import s from './ErrorView.scss';

const title = 'Error';

class ErrorView extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div>
        <h1>{title}</h1>
        <p>Sorry, an critical error occurred on this page.</p>
      </div>
    );
  }

}

export default withStyles(ErrorView, s);
