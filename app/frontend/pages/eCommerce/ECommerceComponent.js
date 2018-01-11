import React, {Component} from 'react';
import ComponentOne from './components/Component_01';
import ComponentTwo from './components/Component_02';
import ComponentThree from './components/Component_03';
//
class ECommerceComponent extends Component {

  render() {
    return (
      <div className="eCommerceComponent page">
        <h3>Accounting</h3>
        <ComponentOne/>
        <ComponentTwo/>
        <ComponentThree/>
      </div>
    );
  }
}

ECommerceComponent.propTypes = {};

export default ECommerceComponent