import React, {Component} from 'react';
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
      <div className="header">
        <div className="logo" onClick={this.onLogoClick}/>
        <div className="link-container">
          { !loggedIn && <Link onClick={this.onLoginClick}>Login</Link>}
          { loggedIn && <Link onClick={this.onLogoutClick}>Logout</Link>}
        </div>
      </div>
    )
  }

  onLoginClick() {
    console.log('login');
    this.props.login();
  }

  onLogoutClick() {
    console.log('logout');
    this.props.logout();
  }

  onLogoClick() {
    browserHistory.push('/');
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

Header.propTypes = {};

export default connect(mapStateToProps, {
  login,
  logout
})(Header)
