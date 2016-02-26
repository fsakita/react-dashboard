import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Content.scss';
import Header from '../Header';
import Footer from '../Footer';


class Content extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    sidebarOpen: PropTypes.bool,
  };

  render() {
    return (
      <main className={[s.root, this.props.sidebarOpen ? s['sidebar-open'] : ''].join(' ')}>
        <Header />
        <div className={s.container}>
          {this.props.children}
        </div>
        <Footer />
      </main>
    );
  }

}

export default withStyles(Content, s);
