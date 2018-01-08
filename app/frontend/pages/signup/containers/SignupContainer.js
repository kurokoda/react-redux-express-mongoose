import SignupComponent from 'frontend/pages/signup/components/SignupComponent';
import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';

class SignupContainer extends Component {

  render() {
    return (
      <div>
        <Helmet
          title={'Sign Up '}
        />
        <SignupComponent/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

SignupContainer.propTypes = {};

export {SignupContainer}
export default connect(mapStateToProps)(SignupContainer)
