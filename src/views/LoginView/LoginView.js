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
