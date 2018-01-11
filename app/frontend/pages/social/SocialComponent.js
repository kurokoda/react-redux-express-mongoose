import React, {Component} from 'react';
import ComponentOne from './components/Component_01';
import ComponentTwo from './components/Component_02';
import ComponentThree from './components/Component_03';
//
class SocialComponent extends Component {

  render() {
    return (
      <div className="socialComponent page">
        <h3>Accounting</h3>
        <ComponentOne/>
        <ComponentTwo/>
        <ComponentThree/>
      </div>
    );
  }
}

SocialComponent.propTypes = {};

export default SocialComponent