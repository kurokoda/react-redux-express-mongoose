import React, {Component} from 'react';
import {connect} from 'react-redux';
//
class FilesComponent extends Component {

  render() {
    return (
      <div className="filesComponent">Files</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

FilesComponent.propTypes = {};

export {FilesComponent}
export default connect(mapStateToProps)(FilesComponent)