import React, {Component} from 'react';
import {connect} from 'react-redux';
//
class AccountingComponent extends Component {

  render() {
    return (
      <div className="accountingComponent">Accounting</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

AccountingComponent.propTypes = {};

export {AccountingComponent}
export default connect(mapStateToProps)(AccountingComponent)