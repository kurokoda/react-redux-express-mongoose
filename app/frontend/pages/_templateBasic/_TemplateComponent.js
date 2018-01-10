import React, {Component} from 'react';
import {connect} from 'react-redux';
//
class TemplateComponent extends Component {

  render() {
    return (
      <div className="templateComponent">Template</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

TemplateComponent.propTypes = {};

export {TemplateComponent}
export default connect(mapStateToProps)(TemplateComponent)