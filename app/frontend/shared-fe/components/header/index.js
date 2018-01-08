import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory, Link} from 'react-router';

class Footer extends Component {

  render() {
    const loggedIn = this.props.auth.get('loggedIn');

    return (
      <div className="header">
        <div className="logo" onClick={this.onLogoClick}/>
        <div className="link-container">
          { !loggedIn && <Link to="/login">Login</Link>}
          { loggedIn && <Link to="#">Logout</Link>}
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    )
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

Footer.propTypes = {};

export default connect(mapStateToProps, {})(Footer)
