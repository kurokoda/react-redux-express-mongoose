import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import NoAuth from '../../shared-fe/components/noAuth';
//
import SocialComponent from './SocialComponent';

class SocialContainer extends Component {

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
            title="Social"
          />
          <SocialComponent/>
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

export default connect(mapStateToProps, {})(SocialContainer)
