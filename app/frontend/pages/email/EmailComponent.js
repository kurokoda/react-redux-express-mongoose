import React, {Component} from 'react';
import {connect} from 'react-redux';
//
class EmailComponent extends Component {

  render() {
    return (
      <div className="emailComponent">Email</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

EmailComponent.propTypes = {};

export {EmailComponent}
export default connect(mapStateToProps)(EmailComponent)