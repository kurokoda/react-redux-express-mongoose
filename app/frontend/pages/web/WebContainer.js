import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import NoAuth from '../../shared-fe/components/noAuth';
//
import WebComponent from './WebComponent';

class WebContainer extends Component {

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
            title="Web"
          />
          <WebComponent/>
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

export default connect(mapStateToProps, {})(WebContainer)
