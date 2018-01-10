import React, {Component} from 'react';
import {connect} from 'react-redux';
//
class ECommerceComponent extends Component {

  render() {
    return (
      <div className="eCommerceComponent">ECommerce</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

ECommerceComponent.propTypes = {};

export {ECommerceComponent}
export default connect(mapStateToProps)(ECommerceComponent)