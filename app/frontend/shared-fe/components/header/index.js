import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {connect} from 'react-redux';
import {browserHistory, Link} from 'react-router';
import {login, logout} from '../../../actions/auth';


class Header extends Component {
  constructor(props) {
    super(props);
    this.onLoginClick  = this.onLoginClick.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  render() {
    const loggedIn = this.props.auth.get('user');

    return (
      <div className="headerComponent">
        <div className="logo" onClick={this.onLogoClick}/>
        <div className="link-container">
          { !loggedIn && <Link onClick={this.onLoginClick}>Login</Link>}
          { loggedIn && <Link onClick={this.onLogoutClick}>Logout</Link>}
        </div>
      </div>
    );
  }

  onLoginClick() {
    this.props.login();
  }

  onLogoutClick() {
    this.props.logout();
  }

  onLogoClick() {
    browserHistory.push('/');
  }

  propTypes = {
    'auth'       : ImmutablePropTypes.map.isRequired,
    //
    'logout'     : PropTypes.func,
    'login'      : PropTypes.func,
  };
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, {
  login,
  logout
})(Header);
