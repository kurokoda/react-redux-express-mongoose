import LoginComponent from '../../../pages/login/components/LoginComponent';
import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';

class LoginContainer extends Component {

  render() {
    return (
      <div>
        <Helmet
          title={'Log In '}
        />
        <LoginComponent/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

LoginContainer.propTypes = {};

export {LoginContainer}
export default connect(mapStateToProps)(LoginContainer)
