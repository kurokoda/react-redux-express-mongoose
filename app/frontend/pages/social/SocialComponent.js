import React, {Component} from 'react';
import {connect} from 'react-redux';
//
class SocialComponent extends Component {

  render() {
    return (
      <div className="socialComponent">Social</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

SocialComponent.propTypes = {};

export {SocialComponent}
export default connect(mapStateToProps)(SocialComponent)