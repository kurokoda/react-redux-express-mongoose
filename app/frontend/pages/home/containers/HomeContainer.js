import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {Link} from 'react-router';
//
import {login} from '../../../actions/auth';
import NoAuth from '../../../shared-fe/components/noAuth';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const loggedIn = this.props.auth.get('user');
    //
    if (!loggedIn) {
      return (
        <NoAuth/>
      )
    } else {
      return (
        <div className="intro">
          <Helmet
            title="Intro"
          />
          <h1>Intro Page</h1>
          <div>
            <img src="/assets/images/head.png"/>
            <button onClick={this.onClick}>HELLO</button>
          </div>
          <Link to="/questions">to question</Link>
        </div>
      )
    }
  }

  onClick() {
    const username = 'foo';
    const password = 'bar';
    //
    this.props.login(username, password)
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {login})(HomeContainer)
