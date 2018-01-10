import React, {Component} from 'react';
import {connect} from 'react-redux';
//
class ReportsComponent extends Component {

  render() {
    return (
      <div className="reportsComponent">Reports</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

ReportsComponent.propTypes = {};

export {ReportsComponent}
export default connect(mapStateToProps)(ReportsComponent)