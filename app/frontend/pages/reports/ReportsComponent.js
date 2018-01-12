import React, {Component} from 'react';
import ComponentOne from './components/Component_01';
import ComponentTwo from './components/Component_02';
import ComponentThree from './components/Component_03';
//
class ReportsComponent extends Component {
  render() {
    return (
      <div className="reportsComponent page">
        <span>Accounting</span>
        <ComponentOne/>
        <ComponentTwo/>
        <ComponentThree/>
      </div>
    );
  }
}

ReportsComponent.propTypes = {};

export default ReportsComponent;
