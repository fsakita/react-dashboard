import React, { Component, PropTypes } from 'react';
import s from './App.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = {
    onSidebarStaticToggle: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      sidebarStatic: false
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.onSidebarStaticToggle = this.onSidebarStaticToggle.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  onSidebarStaticToggle() {
    this.setState({sidebarStatic: !this.state.sidebarStatic})
  }

  getChildContext() {
    return {
      onSidebarStaticToggle: this.onSidebarStaticToggle
    };
  }

  render() {
    return (
      <div className={s.root}>
        <Sidebar open={this.state.sidebarOpen}
                 static={this.state.sidebarStatic}
                 onSetOpen={this.onSetSidebarOpen} />
        <Content children={this.props.children}
                 sidebarOpen={this.state.sidebarOpen} />
      </div>
    );
  }

}

export default withStyles(App, s);
