import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';
import NoAuth from '../../shared-fe/components/noAuth';
//
import HomeComponent from './HomeComponent';

class HomeContainer extends Component {

  render() {
    const loggedIn = this.props.auth.get('user');
    //
    if (!loggedIn) {
      return (
        <NoAuth/>
      )
    } else {
      return (
        <div>
          <Helmet
            title="Home"
          />
          <HomeComponent/>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {login})(HomeContainer)
