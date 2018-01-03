import {loadQuestionDetail} from 'frontend/actions/questions';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Footer extends Component {

  render() {
    return (
      <div className="header">
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

Footer.propTypes = {};

export default connect(mapStateToProps, {})(Footer)
