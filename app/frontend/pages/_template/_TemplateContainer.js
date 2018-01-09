import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {login, logout} from '../../../actions/auth';
import LoginComponent from '../../../pages/login/components/LoginComponent';

class LoginContainer extends Component {

  render() {
    const loginComponentProps = {login: this.props.login, logout: this.props.logout}
    return (
      <div>
        <Helmet
          title={'Log In '}
        />
        <LoginComponent {...loginComponentProps}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

LoginContainer.propTypes = {};

export {LoginContainer}
export default connect(mapStateToProps, {logout, login})(LoginContainer)
