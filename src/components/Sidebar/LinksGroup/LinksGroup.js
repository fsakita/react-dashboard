import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LinksGroup.scss';
import { Link, IndexLink } from 'react-router';
import {Panel} from 'react-bootstrap';

class LinksGroup extends Component {
  static propTypes = {
    header: React.PropTypes.string.isRequired,
    headerLink: React.PropTypes.string,
    children: React.PropTypes.array
  };

  static contextTypes = {
    router: React.PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      static: this.props.static,
      isOpened: false
    };
  }

  render() {
    if (this.props.headerLink) {
      return (
        <li className={s.headerLink}>
          <Link to={this.props.headerLink}>{this.props.header}</Link>
        </li>
      );
    }

    return (
      <li>
        <a className={s.headerLink} onClick={() => {this.setState({isOpened: !this.state.isOpened})}}>{this.props.header}</a>
        <Panel className={s.panel} collapsible expanded={this.state.isOpened}>
          <ul>
            {this.props.children && this.props.children.map((child) => {
              return <li key={child.name}><Link activeStyle={{color: 'red'}} to={child.link}>{child.name}</Link></li>
            })}
          </ul>
        </Panel>
      </li>
    );
  }

}

export default withStyles(LinksGroup, s);
