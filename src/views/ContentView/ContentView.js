import React, { Component, PropTypes } from 'react';
import withStyles from '../../../node_modules/isomorphic-style-loader/lib/withStyles';
import s from './ContentView.scss';

class ContentView extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.content || '' }} />
      </div>
    );
  }

}

export default withStyles(ContentView, s);
