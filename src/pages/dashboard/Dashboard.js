import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Button, ButtonGroup, ButtonToolbar, DropdownButton, MenuItem, ProgressBar,
  Alert, Row, Col, ListGroup, Badge, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Widget from '../../components/Widget';
import { fetchPosts } from '../../actions/posts';

import s from './Dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alert1Visible: true,
      alert2Visible: true,
      alert3Visible: true,
      alert4Visible: true,
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="mb-lg">Dashboard</h1>
        <Row>
          <Col sm={6}>
            <Widget title={
              <div>
                <div className="pull-right mt-n-xs">
                  <input type="search" placeholder="Search..." className="form-control input-sm" />
                </div>
                <h5 className="mt-0"><Glyphicon glyph="user" className="mr-xs opacity-70"/> Users</h5>
              </div>
            }>
              <table className="table mb-0">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1</td>
                  <td>Alice</td>
                  <td>alice@email.com</td>
                  <td><span className="label label-success">active</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bob</td>
                  <td>bob@email.com</td>
                  <td><span className="label label-warning text-default">delayed</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Duck</td>
                  <td>duck@email.com</td>
                  <td><span className="label label-success">active</span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Shepherd</td>
                  <td>shepherd@email.com</td>
                  <td><span className="label bg-dark">removed</span></td>
                </tr>
                </tbody>
              </table>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.posts.isFetching,
    posts: state.posts.posts
  };
}

export default connect(mapStateToProps)(withStyles(s)(Dashboard));
