import React, {Component} from 'react';
import {connect} from 'react-redux';

class Footer extends Component {
  render() {
    return (
      <div className="footerComponent">
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

Footer.propTypes = {};

export default connect(mapStateToProps, {})(Footer);
