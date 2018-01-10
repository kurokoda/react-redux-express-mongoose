import React, {Component} from 'react';
import {connect} from 'react-redux';
//
class BasicComponent extends Component {

  render() {
    return (
      <div className="templateComponent">Template</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

BasicComponent.propTypes = {};

export {LoginComponent}
export default connect(mapStateToProps)(BasicComponent)