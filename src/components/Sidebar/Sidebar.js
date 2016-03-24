import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.scss';
import { Link, IndexLink } from 'react-router';
import LinksGroup from './LinksGroup/LinksGroup';

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

  componentWillReceiveProps(newProps) {
    if (newProps.static != undefined && newProps.static !== this.state.static) {
      this.setState({static: newProps.static, open: newProps.static});
      this.props.onSetOpen(newProps.static);
    }
  }

  onMouseEnter() {
    if (!this.state.static && !this.props.open) {
      this.props.onSetOpen(true);
    }
  }

  onMouseLeave() {
    if (!this.state.static && this.props.open) {
      this.props.onSetOpen(false);
    }
  }

  onLinksGroupOpen(name) {

  }

  render() {
    return (
      <nav className={s.root} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
        <div style={{height: 50}}></div>
        <ul className={s.nav}>
          <LinksGroup header="Dashboard" children={[{name: 'Dashboard', link: '/app/dashboard'}, {name: 'Widgets', link: '/app/widgets'}]}/>
          <LinksGroup header="Mailbox" headerLink="/app/email"/>
          <LinksGroup header="Charts" headerLink="/app/charts"/>
          <LinksGroup header="Profile" headerLink="/app/profile"/>
        </ul>
        <h4>Template</h4>
        <ul className={s.nav}>
          <LinksGroup header="Forms" children={[{name: 'Form Elements', link: '/app/forms/elements'}, {name: 'Form Validation', link: '/app/forms/validation'}, {name: 'Form Wizard', link: '/app/forms/wizard'}]}/>
        </ul>
      </nav>
    );
  }

}

export default withStyles(Sidebar, s);
