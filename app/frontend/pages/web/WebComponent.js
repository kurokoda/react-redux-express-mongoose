import React, {Component} from 'react';
import {connect} from 'react-redux';
//
class WebComponent extends Component {

  render() {
    return (
      <div className="webComponent">Web</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

WebComponent.propTypes = {};

export {WebComponent}
export default connect(mapStateToProps)(WebComponent)